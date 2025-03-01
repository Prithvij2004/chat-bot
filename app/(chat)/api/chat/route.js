import { db } from "@/lib/db";
import { generateTitle } from "../../action";

import { NextResponse } from "next/server";
import { streamText } from "ai";
import { myProvider } from "@/lib/ai/model";
import { systemPrompt } from "@/lib/ai/prompt";

// This route should return/stream the output generated from the AI model.
// Also store every it in database. If chat id dosen't exist in database, create a new chat.
export async function POST(request) {
  let chatId, messages;
  const { id, userMessage, selectedModel } = await request.json();

  chatId = id; 

  if (!id) {
    const output = await generateTitle(userMessage);
    const title = output.text;
    const chat = await db.Chat.create({ name: title });
    chatId = chat.toJSON().id;
  }

  const result = streamText({
    model: myProvider.languageModel(selectedModel),
    system: systemPrompt(selectedModel),
    messages: messages,
    async onFinish() {
      await db.Message.create({ chatId: chatId, content: messages, sender: "assistant" });
    }
  });

  return result.toTextStreamResponse();
}
