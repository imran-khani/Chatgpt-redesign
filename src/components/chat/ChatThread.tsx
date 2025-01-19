import { Message } from "@/lib/ai/types"
import { ScrollArea } from "../ui/scroll-area"
import { ChatMessage } from "./ChatMessage"

interface ChatThreadProps {
  messages: Message[]
}

export function ChatThread({ messages }: ChatThreadProps) {
  return (
    <ScrollArea className="h-[80vh] px-4">
      <div className="flex flex-col gap-4">
        {messages.map((message, index) => (
          <ChatMessage key={index} message={message} />
        ))}
      </div>
    </ScrollArea>
  )
} 