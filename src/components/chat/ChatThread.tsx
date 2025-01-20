import { Message } from "@/lib/ai/types"
import { ScrollArea } from "../ui/scroll-area"
import { ChatMessage } from "./ChatMessage"

interface ChatThreadProps {
  messages: Message[]
}

export function ChatThread({ messages }: ChatThreadProps) {
  return (
    <ScrollArea className="h-[calc(100vh-80px)] pb-[80px]">
      <div className="flex flex-col gap-4 max-w-3xl mx-auto p-4">
        {messages.map((message, index) => (
          <ChatMessage key={index} message={message} />
        ))}
      </div>
    </ScrollArea>
  )
} 