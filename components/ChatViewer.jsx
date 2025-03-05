'use client'


// Setup the messages viewing and the streaming output
export default function ChatViewer({ messages }) {
  return (
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map(m => (
          <div
            key={m.id}
            className={`p-3 rounded-lg max-w-[80%] ${
              m.role === "user"
                ? "bg-blue-100 self-end ml-auto"
                : "bg-gray-100 self-start"
            }`}
          >
            <span className="font-bold">{m.role === "user" ? "You: " : "AI: "}</span>
            <span>{m.content}</span>
          </div>
        ))}
      </div>
  )
}
