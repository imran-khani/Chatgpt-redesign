import { useState } from "react"
import { Input } from "../ui/input"
import { Button } from "../ui/button"
import { SendHorizontal } from "lucide-react"

interface ChatInputProps {
  onSend: (message: string) => void
  isLoading: boolean
}

export function ChatInput({ onSend, isLoading }: ChatInputProps) {
  const [input, setInput] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (input.trim() && !isLoading) {
      onSend(input)
      setInput("")
    }
  }

  return (
    <form onSubmit={handleSubmit} className="p-4">
      <div className="relative">
        <Input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type a message..."
          className="pr-12"
          disabled={isLoading}
        />
        <Button 
          size="icon"
          type="submit"
          disabled={isLoading}
          className="absolute right-1 top-1/2 -translate-y-1/2"
        >
          <SendHorizontal className="h-4 w-4" />
        </Button>
      </div>
    </form>
  )
} 