import { useOutletContext } from "react-router-dom"
import { ChatThread } from "../chat/ChatThread"
import { ChatInput } from "../chat/ChatInput"
import type { Message } from "@/lib/ai/types"

interface ChatContext {
  messages: Message[]
  isLoading: boolean
  sendMessage: (content: string) => void
}

export default function Main() {
  const { messages, isLoading, sendMessage } = useOutletContext<ChatContext>()

  return (
    <div className="flex flex-col items-center min-h-screen">
      <div className="w-full max-w-2xl flex-1 overflow-hidden">
        <ChatThread messages={messages} />
      </div>
      <ChatInput onSend={sendMessage} isLoading={isLoading} />
    </div>
  )
}