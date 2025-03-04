'use client'

import { useChat } from "@ai-sdk/react";
import { useState } from "react";

export default function Page() {
  const [dropdownValue, setDropdownValue] = useState('assistant-model');
  const { messages, input, handleInputChange, handleSubmit } = useChat();

  const chatId = crypto.randomUUID();

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
