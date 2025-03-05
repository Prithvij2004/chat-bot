'use client'

import { useChat } from "@ai-sdk/react";

import PromptForm from './inputForm';
import ChatViewer from "./ChatViewer";

export default function InputHandler({ id, initialMessages }) {

  if (!id) {
    id = crypto.randomUUID();
  }

  const { messages, input, handleInputChange, handleSubmit } = useChat({
    id,
    initialMessages: initialMessages || [],
  });

  return (
    <>
      <ChatViewer messages={messages} />
      <PromptForm id={id} input={input} handleSubmit={handleSubmit} handleInputChange={handleInputChange}/>
    </>
  );
}
