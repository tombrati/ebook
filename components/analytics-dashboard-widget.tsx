"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { RefreshCw, Users, MousePointer, Clock } from "lucide-react"

interface AnalyticsDashboardWidgetProps {
  className?: string
}

export default function AnalyticsDashboardWidget({ className }: AnalyticsDashboardWidgetProps) {
  const [activeUsers, setActiveUsers] = useState<number | null>(null)
  const [pageViews, setPageViews] = useState<number | null>(null)
  const [sessionDuration, setSessionDuration] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null)

  const fetchAnalyticsData = async () => {
    setIsLoading(true)

    try {
      // In a real implementation, you would fetch this data from your API
      // which would use the Google Analytics API to get real-time data

      // For now, we'll simulate the data
      await new Promise((resolve) => setTimeout(resolve, 1000))

      setActiveUsers(Math.floor(Math.random() * 10) + 1)
      setPageViews(Math.floor(Math.random() * 100) + 50)
      setSessionDuration("2m 45s")
      setLastUpdated(new Date())
    } catch (error) {
      console.error("Error fetching analytics data:", error)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchAnalyticsData()

    // Refresh data every 5 minutes
    const interval = setInterval(fetchAnalyticsData, 5 * 60 * 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <Card className={className}>
      <CardHeader className="pb-2">
        <div className="flex justify-between items-center">
          <CardTitle>Real-Time Analytics</CardTitle>
          <Button variant="ghost" size="sm" onClick={fetchAnalyticsData} disabled={isLoading}>
            <RefreshCw className={`h-4 w-4 ${isLoading ? "animate-spin" : ""}`} />
            <span className="sr-only">Refresh</span>
          </Button>
        </div>
        <CardDescription>
          {lastUpdated ? `Last updated: ${lastUpdated.toLocaleTimeString()}` : "Loading..."}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-3 gap-4">
          <div className="flex flex-col items-center p-3 bg-muted rounded-lg">
            <Users className="h-5 w-5 text-primary mb-1" />
            <div className="text-xs text-muted-foreground">Active Users</div>
            <div className="text-xl font-bold mt-1">{isLoading ? "-" : activeUsers}</div>
          </div>

          <div className="flex flex-col items-center p-3 bg-muted rounded-lg">
            <MousePointer className="h-5 w-5 text-primary mb-1" />
            <div className="text-xs text-muted-foreground">Page Views</div>
            <div className="text-xl font-bold mt-1">{isLoading ? "-" : pageViews}</div>
          </div>

          <div className="flex flex-col items-center p-3 bg-muted rounded-lg">
            <Clock className="h-5 w-5 text-primary mb-1" />
            <div className="text-xs text-muted-foreground">Avg. Session</div>
            <div className="text-xl font-bold mt-1">{isLoading ? "-" : sessionDuration}</div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
