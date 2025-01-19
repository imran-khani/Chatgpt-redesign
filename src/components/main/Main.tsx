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
    <div className="flex flex-col h-screen">
      <ChatThread messages={messages} />
      <ChatInput onSend={sendMessage} isLoading={isLoading} />
    </div>
  )
}