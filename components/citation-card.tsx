import { Card, CardContent } from "@/components/ui/card"
import { ExternalLink } from "lucide-react"

interface CitationCardProps {
  sources: string[]
}

export function CitationCard({ sources }: CitationCardProps) {
  if (!sources.length) return null

  return (
    <Card className="mt-4 bg-gray-50 border-gray-200">
      <CardContent className="p-4">
        <h4 className="text-sm font-semibold text-gray-700 mb-2">Sources:</h4>
        <div className="space-y-2">
          {sources.map((source, index) => (
            <a
              key={index}
              href={source}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-blue-600 hover:text-blue-800 hover:underline"
            >
              <ExternalLink className="w-3 h-3" />
              {new URL(source).hostname}
            </a>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
