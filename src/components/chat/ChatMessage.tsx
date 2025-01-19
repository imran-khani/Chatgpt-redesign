import { Message } from "@/lib/ai/types"
import { Card, CardContent } from "../ui/card"
import { Avatar, AvatarFallback } from "../ui/avatar"

interface ChatMessageProps {
  message: Message
}

export function ChatMessage({ message }: ChatMessageProps) {
  const isUser = message.role === 'user'
  
  return (
    <div className={`flex gap-3 ${isUser ? 'flex-row-reverse' : 'flex-row'}`}>
      <Avatar>
        <AvatarFallback>{isUser ? 'U' : 'A'}</AvatarFallback>
      </Avatar>
      <Card className={`${isUser ? 'bg-primary' : 'bg-muted'}`}>
        <CardContent className="p-3">
          {message.content}
        </CardContent>
      </Card>
    </div>
  )
} 