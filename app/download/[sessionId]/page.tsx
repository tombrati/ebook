import { notFound } from "next/navigation"
import Link from "next/link"
import { ArrowDown, BookOpen, CheckCircle, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

// In a real implementation, this would verify the session ID against your database
// and only allow access if the purchase is valid
async function getDownloadData(sessionId: string) {
  // This is a mock implementation
  // In a real app, you would check your database to verify this session ID
  // corresponds to a valid purchase

  // For demo purposes, we'll just check if the session ID looks valid
  if (!sessionId || sessionId.length < 10) {
    return null
  }

  return {
    productName: "AI Beginner's Guide to Making Money",
    purchaseDate: new Date().toLocaleDateString(),
    downloads: [
      {
        id: "basic-pdf",
        name: "AI Beginner's Guide (PDF)",
        description: "The complete ebook in PDF format",
        fileType: "PDF",
        fileSize: "4.2 MB",
        url: "/files/ai-beginners-guide.pdf", // This would be a secure URL in production
      },
      {
        id: "premium-resources",
        name: "Bonus Resources Pack",
        description: "Templates, checklists, and additional resources",
        fileType: "ZIP",
        fileSize: "12.8 MB",
        url: "/files/bonus-resources.zip", // This would be a secure URL in production
      },
    ],
  }
}

export default async function DownloadPage({ params }: { params: { sessionId: string } }) {
  const downloadData = await getDownloadData(params.sessionId)

  if (!downloadData) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2 font-bold text-xl">
            <Link href="/">Aurimas Povilaitis</Link>
          </div>
        </div>
      </header>

      <div className="container py-12 max-w-4xl">
        <div className="mb-8 text-center space-y-2">
          <div className="flex justify-center mb-4">
            <div className="rounded-full bg-primary/10 p-3">
              <CheckCircle className="h-10 w-10 text-primary" />
            </div>
          </div>
          <h1 className="text-3xl font-bold">Your Purchase is Ready!</h1>
          <p className="text-muted-foreground">
            Thank you for purchasing {downloadData.productName}. Your files are ready to download.
          </p>
        </div>

        <Card className="mb-8">
          <CardContent className="p-6">
            <div className="flex items-center gap-4 mb-6">
              <div className="rounded-full bg-primary/10 p-2">
                <Shield className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h2 className="font-medium">Secure Download</h2>
                <p className="text-sm text-muted-foreground">
                  This is a secure, one-time download link for your purchase.
                </p>
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {downloadData.downloads.map((download) => (
                <div key={download.id} className="border rounded-lg p-4 flex flex-col">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded bg-muted flex items-center justify-center">
                      <BookOpen className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium">{download.name}</h3>
                      <p className="text-sm text-muted-foreground">{download.description}</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                    <span>{download.fileType}</span>
                    <span>{download.fileSize}</span>
                  </div>
                  <Button className="mt-auto gap-2" asChild>
                    <a href={download.url} download>
                      Download <ArrowDown className="h-4 w-4" />
                    </a>
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <div className="bg-muted rounded-lg p-6">
          <h2 className="text-xl font-medium mb-4">What's Next?</h2>
          <ul className="space-y-3">
            <li className="flex gap-2">
              <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
              <span>
                <strong>Read the Guide:</strong> Start implementing the AI money-making strategies today.
              </span>
            </li>
            <li className="flex gap-2">
              <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
              <span>
                <strong>Join Our Community:</strong> Connect with other readers in our private community.
              </span>
            </li>
            <li className="flex gap-2">
              <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
              <span>
                <strong>Get Support:</strong> If you have any questions, reach out to me directly.
              </span>
            </li>
          </ul>

          <div className="mt-6 flex flex-col sm:flex-row gap-4">
            <Button asChild>
              <Link href="/">Return to Homepage</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/contact">Contact Aurimas</Link>
            </Button>
          </div>
        </div>
      </div>

      <footer className="border-t py-8 bg-muted mt-12">
        <div className="container flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="font-bold">
            <span>Aurimas Povilaitis</span>
          </div>
          <div className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Aurimas Povilaitis. All rights reserved.
          </div>
          <div className="flex gap-4">
            <Link href="/privacy" className="text-sm text-muted-foreground hover:text-foreground">
              Privacy
            </Link>
            <Link href="/terms" className="text-sm text-muted-foreground hover:text-foreground">
              Terms
            </Link>
            <Link href="/contact" className="text-sm text-muted-foreground hover:text-foreground">
              Contact
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
