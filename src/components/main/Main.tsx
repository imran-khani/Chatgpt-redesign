import { useOutletContext, useNavigate, useLocation } from "react-router-dom"
import { ChatThread } from "../chat/ChatThread"
import { ChatInput } from "../chat/ChatInput"
import type { Message } from "@/lib/ai/types"
import { useEffect } from "react"

interface ChatContext {
  messages: Message[]
  isLoading: boolean
  sendMessage: (content: string) => void
  createNewChat: () => void
}

export default function Main() {
  const { messages, isLoading, sendMessage, createNewChat } = useOutletContext<ChatContext>()
  const navigate = useNavigate()
  const location = useLocation()

  // Only run once when component mounts
  useEffect(() => {
    if (location.pathname === '/') {
      const timeout = setTimeout(() => {
        createNewChat()
      }, 0)
      return () => clearTimeout(timeout)
    }
  }, []) // Empty dependency array

  return (
    <div className="flex flex-col items-center min-h-screen">
      <div className="w-full max-w-2xl flex-1 overflow-hidden">
        <ChatThread messages={messages} />
      </div>
      <ChatInput onSend={sendMessage} isLoading={isLoading} />
    </div>
  )
}