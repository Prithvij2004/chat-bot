import { generateTitle } from "../../action";

import { smoothStream, streamText } from "ai";
import { myProvider } from "@/lib/ai/model";
import { systemPrompt } from "@/lib/ai/prompt";
import { cleanMessage, getRecentMessages } from "@/lib/utils";
import { createChat, createMessage } from "@/lib/db/queries";

// This route should return/stream the output generated from the AI model.
// Also store every it in database. If chat id dosen't exist in database, create a new chat.
export async function POST(request) {
  let chatId;
  const { id, messages, selectedModel } = await request.json();

  chatId = id; 

  if (!id) {
    const output = await generateTitle(messages.at(-1));
    const title = output.text;
    const chat = await createChat(title);
    chatId = chat.id;
  }

  const recentMessages = getRecentMessages(messages); 

  const result = streamText({
    model: myProvider.languageModel(selectedModel),
    system: systemPrompt(selectedModel),
    messages: recentMessages,
    experimental_transform: smoothStream(),
    async onFinish({ text }) {
      await createMessage(chatId, cleanMessage(text), "assistant");
    }
  });
  result.consumeStream();

  return result.toTextStreamResponse()
}
