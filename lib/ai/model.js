import { openai } from "@ai-sdk/openai";

import { customProvider } from "ai";

export const DEFAULT_MODEL = "assistant-model";

export const myProvider = customProvider({
  languageModels: {
    // normal assitant model for daily users will swap it wiht gemini-flash
    'assistant-model': openai('gpt-4o-mini'),
    // powerful model fro complex tasks
    'powerful-model': openai('gpt-4o'),
    // reasoning model for thinking tasks
    'reasoning-model': openai('o3-mini'),
    // coding model for coding tasks
    'coding-model': openai('gpt-4o'),
  },
});

export const chatModels = [
  {
    id: "assistant-model",
    name: "Assistant Model",
    description: "A model that can help you with your daily tasks",
  },
  {
    id: "powerful-model",
    name: "Powerful Model",
    description: "A model that can help you with complex tasks",
  },
  {
    id: "reasoning-model",
    name: "Reasoning Model",
    description: "A model that can help you with thinking tasks"
  },
  {
    id: "coding-model",
    name: "Coding Model",
    description: "A model that can help you with coding tasks"
  }
]
