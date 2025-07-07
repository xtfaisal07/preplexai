"use client"

import type React from "react"

import { useChat } from "ai/react"
import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Send, Bot, User, Sparkles } from "lucide-react"

export default function PerplexityChat() {
  const { messages, input, handleInputChange, handleSubmit, isLoading } = useChat()
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  useEffect(() => {
    setIsTyping(isLoading)
  }, [isLoading])

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!input.trim()) return
    handleSubmit(e)
  }

  return (
    <div className="flex flex-col h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <div className="border-b bg-white/80 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">Perplexity AI Chat</h1>
              <p className="text-sm text-gray-600">Real-time answers with citations</p>
            </div>
          </div>
        </div>
      </div>

      {/* Chat Messages */}
      <div className="flex-1 overflow-hidden">
        <div className="max-w-4xl mx-auto h-full">
          <ScrollArea className="h-full px-4 py-6">
            {messages.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mb-4">
                  <Bot className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Welcome to Perplexity AI</h2>
                <p className="text-gray-600 max-w-md">
                  Ask me anything and I'll provide real-time, accurate answers with citations from across the web.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-8 w-full max-w-2xl">
                  {[
                    "What are the latest developments in AI?",
                    "Explain quantum computing in simple terms",
                    "What's happening in the stock market today?",
                    "How does climate change affect ocean currents?",
                  ].map((suggestion, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      className="text-left h-auto p-4 whitespace-normal"
                      onClick={() => handleInputChange({ target: { value: suggestion } } as any)}
                    >
                      {suggestion}
                    </Button>
                  ))}
                </div>
              </div>
            ) : (
              <div className="space-y-6">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex gap-4 ${message.role === "user" ? "justify-end" : "justify-start"}`}
                  >
                    {message.role === "assistant" && (
                      <Avatar className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600">
                        <AvatarFallback>
                          <Bot className="w-4 h-4 text-white" />
                        </AvatarFallback>
                      </Avatar>
                    )}

                    <Card
                      className={`max-w-[80%] ${
                        message.role === "user" ? "bg-blue-600 text-white" : "bg-white border-gray-200"
                      }`}
                    >
                      <CardContent className="p-4">
                        <div className="prose prose-sm max-w-none">
                          {message.role === "user" ? (
                            <p className="text-white m-0">{message.content}</p>
                          ) : (
                            <div className="text-gray-900">
                              {message.content.split("\n").map((line, index) => (
                                <p key={index} className="m-0 mb-2 last:mb-0">
                                  {line}
                                </p>
                              ))}
                            </div>
                          )}
                        </div>
                      </CardContent>
                    </Card>

                    {message.role === "user" && (
                      <Avatar className="w-8 h-8 bg-gray-600">
                        <AvatarFallback>
                          <User className="w-4 h-4 text-white" />
                        </AvatarFallback>
                      </Avatar>
                    )}
                  </div>
                ))}

                {isTyping && (
                  <div className="flex gap-4 justify-start">
                    <Avatar className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600">
                      <AvatarFallback>
                        <Bot className="w-4 h-4 text-white" />
                      </AvatarFallback>
                    </Avatar>
                    <Card className="bg-white border-gray-200">
                      <CardContent className="p-4">
                        <div className="flex items-center gap-2">
                          <div className="flex gap-1">
                            <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce"></div>
                            <div
                              className="w-2 h-2 bg-blue-600 rounded-full animate-bounce"
                              style={{ animationDelay: "0.1s" }}
                            ></div>
                            <div
                              className="w-2 h-2 bg-blue-600 rounded-full animate-bounce"
                              style={{ animationDelay: "0.2s" }}
                            ></div>
                          </div>
                          <span className="text-sm text-gray-600">Searching and analyzing...</span>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>
            )}
          </ScrollArea>
        </div>
      </div>

      {/* Input Form */}
      <div className="border-t bg-white/80 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <form onSubmit={onSubmit} className="flex gap-3">
            <div className="flex-1 relative">
              <Input
                value={input}
                onChange={handleInputChange}
                placeholder="Ask anything... I'll search the web for real-time answers"
                className="pr-12 h-12 text-base"
                disabled={isLoading}
              />
            </div>
            <Button
              type="submit"
              disabled={isLoading || !input.trim()}
              className="h-12 px-6 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
            >
              <Send className="w-4 h-4" />
            </Button>
          </form>
          <p className="text-xs text-gray-500 mt-2 text-center">
            © 2025 Faisal Naseer. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  )
}
