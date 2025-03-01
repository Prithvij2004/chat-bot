import { DEFAULT_MODEL, myProvider } from "@/lib/ai/model";

import { generateText } from "ai";

const generateTitle = async (input) => {
  const model = myProvider.languageModel(DEFAULT_MODEL);
  const title = await generateText({
    model: model,
    system: `
      - You are a title generator, ie,you generate information conveying titles.
      - Ensure it is small sentance or maximum 7 words. And it should only be one sentance.
      - Ensure there are no dots, comma or any other symbols.
      - The title should summarize based on the user prompt.
    `,
    prompt: JSON.stringify(input),
  });

  return title;
}

export { generateTitle };
