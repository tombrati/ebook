import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "7 Proven AI Side Hustles You Can Start Today | Aurimas Povilaitis",
  description:
    "Discover 7 proven AI side hustles that regular people are using to earn money in 2025. Get your free guide with step-by-step instructions.",
  keywords: [
    "AI side hustles",
    "make money with AI",
    "AI income",
    "AI for beginners",
    "AI monetization",
    "Aurimas Povilaitis",
  ],
  openGraph: {
    title: "7 Proven AI Side Hustles You Can Start Today",
    description:
      "Discover 7 proven AI side hustles that regular people are using to earn money in 2025. Get your free guide with step-by-step instructions.",
    images: [
      {
        url: "/images/ai-side-hustles-og.jpg",
        width: 1200,
        height: 630,
        alt: "7 Proven AI Side Hustles Guide",
      },
    ],
  },
}

export default function AISideHustlesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
