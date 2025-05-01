import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="container max-w-2xl py-12 text-center">
        <h1 className="text-6xl font-bold mb-4">404</h1>
        <h2 className="text-2xl font-medium mb-6">Page Not Found</h2>
        <p className="text-muted-foreground mb-8">The page you are looking for doesn't exist or has been moved.</p>
        <Button asChild>
          <Link href="/">Return to Homepage</Link>
        </Button>
      </div>
    </div>
  )
}
