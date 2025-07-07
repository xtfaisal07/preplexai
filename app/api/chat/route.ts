import { perplexity } from "@ai-sdk/perplexity"
import { streamText } from "ai"

// Allow streaming responses up to 30 seconds
export const maxDuration = 30

export async function POST(req: Request) {
  try {
    const { messages } = await req.json()

    // Use Perplexity's Sonar Pro model for advanced queries with search grounding
    const result = streamText({
      model: perplexity("sonar-pro"),
      messages,
      temperature: 0.7,
      maxTokens: 1000,
    })

    return result.toDataStreamResponse()
  } catch (error) {
    console.error("Error in chat API:", error)
    return new Response("Internal Server Error", { status: 500 })
  }
}
