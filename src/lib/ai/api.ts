import { HfInference } from "@huggingface/inference";

const API_KEY = import.meta.env.VITE_HUGGING_FACE_API_KEY
const client = new HfInference(API_KEY)

export const generateResponse = async (prompt: string) => {
    try {
        const response = await client.textGeneration({
            model: "HuggingFaceH4/zephyr-7b-beta",  // Smaller, reliable model
            inputs: `<|system|>You are a helpful AI assistant.</s>
                    <|user|>${prompt}</s>
                    <|assistant|>`,
            parameters: {
                max_new_tokens: 200,
                temperature: 0.7,
                top_p: 0.95,
                return_full_text: false
            }
        })
        return {
            content: response.generated_text
        }
    } catch (error) {
        console.error("Error generating response:", error)
        throw error
    }
}