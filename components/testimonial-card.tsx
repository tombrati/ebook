import { Star } from "lucide-react"
import { Card, CardContent, CardFooter } from "@/components/ui/card"

interface TestimonialCardProps {
  quote: string
  author: string
  role: string
  rating: number
}

export default function TestimonialCard({ quote, author, role, rating }: TestimonialCardProps) {
  return (
    <Card className="h-full flex flex-col">
      <CardContent className="pt-6 flex-1">
        <div className="flex mb-4">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className={`h-4 w-4 ${i < rating ? "fill-primary text-primary" : "text-muted"}`} />
          ))}
        </div>
        <blockquote className="text-lg italic">"{quote}"</blockquote>
      </CardContent>
      <CardFooter className="border-t pt-4">
        <div>
          <div className="font-medium">{author}</div>
          <div className="text-sm text-muted-foreground">{role}</div>
        </div>
      </CardFooter>
    </Card>
  )
}
