export const config = {
  perplexity: {
    apiKey: process.env.PERPLEXITY_API_KEY,
    baseUrl: "https://api.perplexity.ai/",
    models: {
      sonarPro: "sonar-pro",
      sonar: "sonar",
    },
  },
} as const

// Validate environment variables
if (!config.perplexity.apiKey) {
  throw new Error("PERPLEXITY_API_KEY environment variable is required")
}
