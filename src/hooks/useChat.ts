import { useState } from 'react'
import type { Message } from '@/lib/ai/types'
import { generateResponse } from '@/lib/ai/api'

export function useChat() {
  const [messages, setMessages] = useState<Message[]>([])
  const [isLoading, setIsLoading] = useState(false)

  const sendMessage = async (content: string) => {
    // Add user message
    const userMessage: Message = {
      role: 'user',
      content,
      timestamp: new Date()
    }
    setMessages(prev => [...prev, userMessage])
    setIsLoading(true)

    try {
      const aiResponse = await generateResponse(content)
      const assistantMessage: Message = {
        role: 'assistant',
        content: aiResponse.content || 'Sorry, I could not generate a response.',
        timestamp: new Date()
      }
      setMessages(prev => [...prev, assistantMessage])
    } catch (error) {
      console.error('Error:', error)
    } finally {
      setIsLoading(false)
    }
  }

  return { messages, isLoading, sendMessage }
} 