import 'server-only'

import InputHandler from "@/components/inputHandler"

export default async function Page() {
  const id = crypto.randomUUID();
  
  return (
    <div className='flex items-center justify-center h-screen'>
      <InputHandler id={id} />
    </div>
  )
}
