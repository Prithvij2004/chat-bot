// TODO: Implement a component for showing messages in the chat.
// Use an input taking component and use it in both chat/ and chat/[id] pages.
// Use a streaming output page in chat/[id] page.
//
// 1. Input taking component
// 2. Streaming output with messages component
// 3. Chat Header component showing the title of the current Chat? (optional)
//
import 'server-only'

import InputHandler from '@/components/inputHandler'

export default async function Page({ params }) {
  const id = params.id;
  const response = await fetch(`http://localhost:3000/api/chat?id=${id}`);
  const messages = await response.json();

  return (
    <div>
      <InputHandler id={id} initialMessages={messages} />
    </div>
  )
}
