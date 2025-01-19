import { HfInference } from "@huggingface/inference";

const API_KEY = import.meta.env.VITE_HUGGING_FACE_API_KEY
const client = new HfInference(API_KEY)

export const generateResponse = async (prompt: string) => {
    try {
        const response = await client.chatCompletion({
            model: "microsoft/phi-4",
            messages: [
                {
                    role: "user",
                    content: prompt
                }
            ],
            max_tokens: 100
        })
        return response.choices[0].message

    } catch (error) {
        console.error("Error generating response:", error)
        throw error
    }
}