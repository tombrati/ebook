import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full overflow-hidden mr-1">
            <Image
              src="/images/aurimas-profile.png"
              alt="Aurimas Povilaitis"
              width={32}
              height={32}
              className="object-cover"
            />
          </div>
          <span className="font-bold text-xl">Aurimas Povilaitis</span>
        </div>
        <nav className="hidden md:flex gap-6">
          <Link href="/#about" className="text-sm font-medium hover:underline underline-offset-4">
            About
          </Link>
          <Link href="/landing-page" className="text-sm font-medium hover:underline underline-offset-4">
            Landing Page
          </Link>
          <Link href="/book" className="text-sm font-medium hover:underline underline-offset-4">
            Book
          </Link>
          <Link href="/#expertise" className="text-sm font-medium hover:underline underline-offset-4">
            Expertise
          </Link>
          <Link href="/blog" className="text-sm font-medium hover:underline underline-offset-4">
            Blog
          </Link>
          <Link href="/pricing" className="text-sm font-medium hover:underline underline-offset-4">
            Pricing
          </Link>
        </nav>
        <Button asChild>
          <Link href="/pricing">Get the Book</Link>
        </Button>
      </div>
    </header>
  )
}
