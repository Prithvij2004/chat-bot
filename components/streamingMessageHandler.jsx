'use client'

export default function StreamingMessageHandler({ messages }) {
  return (
   <>
   {messages.map(message => {
      return (
       <div key={message.id}>
          <h3>{message.sender === 'user' ? 'User' : 'AI'}</h3>
          <p>{message.content}</p>
        </div>
      )
    })}
    </>
  )
}
