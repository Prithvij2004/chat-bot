'use client'

import { z } from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
} from "@/components/ui/form"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Send } from "lucide-react"

const formSchema = z.object({
  prompt: z.string(),
  selectedModel: z.string(),
})

export default function PromptForm({ id, input, handleSubmit, handleInputChange }) {

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: { prompt:"", selectedModel: "assistant-model" },
  })

  function onSubmit(values) {
    window.history.replaceState({}, '', `/chat/${id}`)
    handleSubmit(null, {
      body: { id: id, selectedModel: values.selectedModel },
    })
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex items-center gap-2 p-2 border rounded-lg shadow-sm w-full max-w-2xl">
        <Input 
          name="prompt" 
          value={input} 
          onChange={handleInputChange} 
          placeholder="Ask me anything..." 
          className="h-14 px-4 w-full rounded-lg border-2 border-gray-400 focus:border-black focus:ring-2 focus:ring-black bg-white text-lg"
        />
        
        <FormField
          control={form.control}
          name="selectedModel"
          render={({ field }) => (
            <FormItem>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a model" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="assistant-model">Assistant Model</SelectItem>
                  <SelectItem value="powerful-model">Powerful Model</SelectItem>
                  <SelectItem value="reasoning-model">Reasoning Model</SelectItem>
                  <SelectItem value="coding-model">Coding Model</SelectItem>
                </SelectContent>
              </Select>
            </FormItem>
          )}
        />

        <Button type="submit" size="icon" className="rounded-full">
          <Send className="h-4 w-4" />
        </Button>
      </form>
    </Form>
  )

}
