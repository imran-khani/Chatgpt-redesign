import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import type { Message } from '@/lib/ai/types'
import { generateResponse } from '@/lib/ai/api'

export interface Chat {
  id: string
  title: string
  messages: Message[]
  createdAt: Date
}

export function useChat() {
  const [chats, setChats] = useState<Chat[]>(() => {
    const saved = localStorage.getItem('chats')
    return saved ? JSON.parse(saved) : []
  })
  const [isLoading, setIsLoading] = useState(false)
  const { chatId } = useParams()
  const navigate = useNavigate()
  
  const currentChat = chats.find(chat => chat.id === chatId)
  
  useEffect(() => {
    localStorage.setItem('chats', JSON.stringify(chats))
  }, [chats])

  const createNewChat = () => {
    const newChat: Chat = {
      id: Date.now().toString(),
      title: 'New Chat',
      messages: [],
      createdAt: new Date()
    }
    setChats(prev => {
      const newChats = [newChat, ...prev]
      console.log('Creating new chat:', newChat.id)
      console.log('New chats state:', newChats)
      return newChats
    })
    navigate(`/chat/${newChat.id}`)
  }

  const sendMessage = async (content: string) => {
    let currentChatId = chatId;
    
    if (!currentChatId) {
      const newChat: Chat = {
        id: Date.now().toString(),
        title: content.slice(0, 30),
        messages: [],
        createdAt: new Date()
      }
      setChats(prev => [newChat, ...prev])
      currentChatId = newChat.id
      navigate(`/chat/${newChat.id}`)
    }
    
    const userMessage: Message = {
      role: 'user',
      content,
      timestamp: new Date()
    }
    
    setChats(prev => prev.map(chat => 
      chat.id === currentChatId 
        ? {
            ...chat,
            messages: [...chat.messages, userMessage]
          }
        : chat
    ))
    
    setIsLoading(true)

    try {
      const aiResponse = await generateResponse(content)
      const assistantMessage: Message = {
        role: 'assistant',
        content: aiResponse.content || 'Sorry, I could not generate a response.',
        timestamp: new Date()
      }
      
      setChats(prev => prev.map(chat => 
        chat.id === currentChatId 
          ? {
              ...chat,
              messages: [...chat.messages, assistantMessage]
            }
          : chat
      ))
    } catch (error) {
      console.error('Error:', error)
    } finally {
      setIsLoading(false)
    }
  }

  return { 
    messages: currentChat?.messages || [], 
    isLoading, 
    sendMessage,
    createNewChat,
    chats 
  }
} 