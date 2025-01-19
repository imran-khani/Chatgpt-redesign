export type Message = {
  role: 'user' | 'assistant'
  content: string
  timestamp: Date
}

export type ChatState = {
  messages: Message[]
  isLoading: boolean
} 