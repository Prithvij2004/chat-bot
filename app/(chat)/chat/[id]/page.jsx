'use client'

import { useChat } from "@ai-sdk/react";
import { useState } from "react";

// TODO: Implement a component for showing messages in the chat.
// Use an input taking component and use it in both chat/ and chat/[id] pages.
// Use a streaming output page in chat/[id] page.
//
// 1. Input taking component
// 2. Streaming output with messages component
// 3. Chat Header component showing the title of the current Chat? (optional)

export default function Page({ params}) {
  const [dropdownValue, setDropdownValue] = useState('assistant-model');
  const { messages, input, handleInputChange, handleSubmit } = useChat();

  const chatId = params.id;

  const handleDropdownChange = (e) => {
    setDropdownValue(e.target.value);
  }

  return (
    <>
     {messages.map(message => {
        <div key={message.id}>
          {message.role === 'user' ? 'User: ' : 'AI: '}
          {message.content}
        </div>
      })}

      <form 
        onSubmit={event => (
          window.history.replaceState({}, '', `/chat/${chatId}`),
          handleSubmit(event, { id: chatId, body: { selectedModel: dropdownValue }})
        )}
      >
        <input name="prompt" value={input} onChange={handleInputChange} />
        
        <select name="selectedModel" value={dropdownValue} onChange={handleDropdownChange}>
          <option value="assistant-model">Assistant Model</option>
          <option value="powerful-model">Powerful Model</option>
          <option value="reasoning-model">Reasoning Model</option>
          <option value="coding-model">Coding Model</option>
        </select>

        <button type="submit">Submit</button>
      </form>
    </>
  );
}
