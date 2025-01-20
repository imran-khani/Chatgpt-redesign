import { useState, useEffect } from 'react'
import type { Message } from '@/lib/ai/types'
import { generateResponse } from '@/lib/ai/api'

export function useChat() {
  const [messages, setMessages] = useState<Message[]>(() => {
    const saved = localStorage.getItem('chat-messages')
    return saved ? JSON.parse(saved) : []
  })
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    localStorage.setItem('chat-messages', JSON.stringify(messages))
  }, [messages])

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