'use client'

import { useChat } from "@ai-sdk/react";
import { useState } from "react";

export default function InputHandler({ id, initialMessages }) {

  if (!id) {
    id = crypto.randomUUID();
  }

  const [dropdownValue, setDropdownValue] = useState('assistant-model');
  const { messages, input, handleInputChange, handleSubmit } = useChat({
    id,
    body: { id , selectedModel: dropdownValue },
    initialMessages,
  });

  const handleDropdownChange = (e) => {
    setDropdownValue(e.target.value);
  }

  return (
    <>
     <div>
        {messages.map(m => (
          <div key={m.id}>
            {m.role === 'user' ? 'User: ' : 'AI: '}
            {m.content}
          </div>
        ))}
      </div>

      <form onSubmit={event => {
        window.history.replaceState({}, '', `/chat/${id}`)
        handleSubmit(event, {})
      }}
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
