import { generateTitle } from "../../action";

import { smoothStream, streamText } from "ai";
import { myProvider } from "@/lib/ai/model";
import { systemPrompt } from "@/lib/ai/prompt";
import { cleanMessage, getRecentMessages } from "@/lib/utils";
import { createChat, createMessage, getChatbyId } from "@/lib/db/queries";
import { NextResponse } from "next/server";

// This route fetches all the messages from chatId
export async function GET(request) {
  const id = request.nextUrl.searchParams.get("id");
  const messages = await getChatbyId(id);
  return NextResponse.json(messages, { status: 200 });
}

// This route should return/stream the output generated from the AI model.
// Also store every it in database. If chat id dosen't exist in database, create a new chat.
export async function POST(request) {
  const { id, messages, selectedModel } = await request.json();

  const chat = await getChatbyId(id);

  if (!chat) {
    const output = await generateTitle(messages.at(-1));
    await createChat(id, output.text);
  }

  const recentMessages = getRecentMessages(messages); 

  const result = streamText({
    model: myProvider.languageModel(selectedModel),
    system: systemPrompt(selectedModel),
    messages: recentMessages,
    experimental_transform: smoothStream(),
    async onFinish({ text }) {
      await createMessage(id, cleanMessage(text), "assistant");
    }
  });
  result.consumeStream();

  return result.toTextStreamResponse()
}
