import { SendHorizonal } from "lucide-react"
import { Button } from "../ui/button"
import { Input } from "../ui/input"

const Main = () => {
  return (
    <div className='flex items-center justify-center bg-[url("/bg.svg")] bg-cover bg-bottom bg-no-repeat min-h-screen flex-col'>
        <h1 className="text-4xl font-bold">
            Welcome to <span className="bg-[url('/text-overlay.svg')] bg-cover bg-center bg-no-repeat">AssanGPT</span>
        </h1>
        <p className="text-sm font-normal my-5 text-center">
          Your AI-powered assistant for all your needs
        </p>
        <div className="w-full max-w-md relative">
          <Input
            className="w-full pr-12 pl-4 py-6 bg-transparent border border-gray-600 rounded-lg focus:ring-emerald-600 focus:border-emerald-600"
            placeholder="Enter your prompt" />
          <Button 
            size="icon" 
            className="absolute right-1.5 top-1/2 -translate-y-1/2 bg-emerald-600 hover:bg-emerald-700 rounded-md h-9 w-9"
          >
            <SendHorizonal className="h-4 w-4" />
          </Button>
        </div>
    </div>
  )
}

export default Main