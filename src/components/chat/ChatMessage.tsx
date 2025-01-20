import { Message } from "@/lib/ai/types"
import { Card, CardContent } from "../ui/card"
import { Avatar, AvatarFallback } from "../ui/avatar"

interface ChatMessageProps {
  message: Message
}

export function ChatMessage({ message }: ChatMessageProps) {
  const isUser = message.role === 'user'
  
  return (
    <div className={`flex gap-3 ${isUser ? 'flex-row-reverse' : 'flex-row'} mb-4`}>
      <Avatar className={`h-8 w-8 ${isUser ? 'bg-primary' : 'bg-emerald-600'}`}>
        <AvatarFallback className="text-sm text-white">
          {isUser ? 'U' : 'A'}
        </AvatarFallback>
      </Avatar>
      <Card className={`
        ${isUser ? 'bg-primary/10 border-primary/20' : 'bg-muted/50 border-muted/50'}
        max-w-[80%]
      `}>
        <CardContent className="p-3 text-sm">
          {message.content}
        </CardContent>
      </Card>
    </div>
  )
} 