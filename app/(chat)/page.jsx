import 'server-only'

import InputHandler from "@/components/inputHandler"

export default async function Page() {
  const id = crypto.randomUUID();
  
  return (
    <InputHandler id={id} />
  )
}
