"use client"

import type React from "react"

import { useChat } from "ai/react"
import { useState, useCallback } from "react"

export function usePerplexityChat() {
  const [searchSources, setSearchSources] = useState<string[]>([])
  const [isSearching, setIsSearching] = useState(false)

  const chat = useChat({
    onResponse: (response) => {
      setIsSearching(false)
      // You can extract sources from response headers if Perplexity provides them
      const sources = response.headers.get("x-sources")
      if (sources) {
        setSearchSources(JSON.parse(sources))
      }
    },
    onError: (error) => {
      setIsSearching(false)
      console.error("Chat error:", error)
    },
  })

  const handleSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      setIsSearching(true)
      setSearchSources([])
      chat.handleSubmit(e)
    },
    [chat],
  )

  return {
    ...chat,
    searchSources,
    isSearching,
    handleSubmit,
  }
}
