"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { RefreshCw, Users, MousePointer, Clock, Globe } from "lucide-react"

// Mock real-time data - in a real implementation, this would come from Google Analytics API
const mockActiveUsers = [
  { id: 1, page: "/", country: "United States", device: "Desktop", browser: "Chrome", duration: "2m 15s" },
  { id: 2, page: "/pricing", country: "Canada", device: "Mobile", browser: "Safari", duration: "1m 30s" },
  { id: 3, page: "/book", country: "United Kingdom", device: "Desktop", browser: "Firefox", duration: "4m 45s" },
  { id: 4, page: "/ai-side-hustles", country: "Australia", device: "Tablet", browser: "Chrome", duration: "3m 10s" },
  { id: 5, page: "/sample", country: "Germany", device: "Desktop", browser: "Edge", duration: "0m 55s" },
  { id: 6, page: "/contact", country: "France", device: "Mobile", browser: "Safari", duration: "1m 20s" },
]

const mockPageViews = [
  { page: "/", views: 42, avgTime: "2m 10s", bounceRate: "35%" },
  { page: "/pricing", views: 28, avgTime: "3m 25s", bounceRate: "25%" },
  { page: "/book", views: 23, avgTime: "4m 15s", bounceRate: "20%" },
  { page: "/ai-side-hustles", views: 35, avgTime: "2m 45s", bounceRate: "30%" },
  { page: "/sample", views: 19, avgTime: "1m 55s", bounceRate: "40%" },
  { page: "/contact", views: 12, avgTime: "1m 30s", bounceRate: "45%" },
]

const mockEvents = [
  { event: "page_view", count: 164, details: "Various pages" },
  { event: "form_submission", count: 12, details: "Contact and lead forms" },
  { event: "file_download", count: 28, details: "Sample chapter and free guide" },
  { event: "begin_checkout", count: 18, details: "Pricing page" },
  { event: "purchase", count: 7, details: "Completed purchases" },
]

export default function RealTimeAnalytics() {
  const [activeUsers, setActiveUsers] = useState(mockActiveUsers)
  const [pageViews, setPageViews] = useState(mockPageViews)
  const [events, setEvents] = useState(mockEvents)
  const [lastUpdated, setLastUpdated] = useState(new Date())
  const [isLoading, setIsLoading] = useState(false)

  const refreshData = () => {
    setIsLoading(true)

    // Simulate API call to refresh data
    setTimeout(() => {
      // In a real implementation, you would fetch data from Google Analytics API
      setActiveUsers([...mockActiveUsers].sort(() => Math.random() - 0.5))
      setPageViews([...mockPageViews].map((view) => ({ ...view, views: view.views + Math.floor(Math.random() * 5) })))
      setEvents([...mockEvents].map((event) => ({ ...event, count: event.count + Math.floor(Math.random() * 3) })))
      setLastUpdated(new Date())
      setIsLoading(false)
    }, 1500)
  }

  useEffect(() => {
    // Auto-refresh every 60 seconds
    const interval = setInterval(() => {
      refreshData()
    }, 60000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Real-Time Analytics</h1>
        <div className="flex items-center gap-4">
          <span className="text-sm text-muted-foreground">Last updated: {lastUpdated.toLocaleTimeString()}</span>
          <Button variant="outline" className="gap-2" onClick={refreshData} disabled={isLoading}>
            <RefreshCw className={`h-4 w-4 ${isLoading ? "animate-spin" : ""}`} />
            Refresh
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Active Users</p>
                <h3 className="text-2xl font-bold mt-1">{activeUsers.length}</h3>
              </div>
              <div className="rounded-full bg-primary/10 p-3">
                <Users className="h-5 w-5 text-primary" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Page Views (Last Hour)</p>
                <h3 className="text-2xl font-bold mt-1">{pageViews.reduce((sum, page) => sum + page.views, 0)}</h3>
              </div>
              <div className="rounded-full bg-primary/10 p-3">
                <MousePointer className="h-5 w-5 text-primary" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Avg. Session Duration</p>
                <h3 className="text-2xl font-bold mt-1">2m 45s</h3>
              </div>
              <div className="rounded-full bg-primary/10 p-3">
                <Clock className="h-5 w-5 text-primary" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="active-users" className="mb-8">
        <TabsList>
          <TabsTrigger value="active-users">Active Users</TabsTrigger>
          <TabsTrigger value="page-views">Page Views</TabsTrigger>
          <TabsTrigger value="events">Events</TabsTrigger>
        </TabsList>

        <TabsContent value="active-users" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Currently Active Users</CardTitle>
              <CardDescription>Users currently browsing your website</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="rounded-md border">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Page</TableHead>
                      <TableHead>Country</TableHead>
                      <TableHead>Device</TableHead>
                      <TableHead>Browser</TableHead>
                      <TableHead>Duration</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {activeUsers.map((user) => (
                      <TableRow key={user.id}>
                        <TableCell className="font-medium">{user.page}</TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <Globe className="h-4 w-4 text-muted-foreground" />
                            {user.country}
                          </div>
                        </TableCell>
                        <TableCell>{user.device}</TableCell>
                        <TableCell>{user.browser}</TableCell>
                        <TableCell>{user.duration}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="page-views" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Page Views (Last Hour)</CardTitle>
              <CardDescription>Most viewed pages in the last hour</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="rounded-md border">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Page</TableHead>
                      <TableHead>Views</TableHead>
                      <TableHead>Avg. Time on Page</TableHead>
                      <TableHead>Bounce Rate</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {pageViews.map((page, index) => (
                      <TableRow key={index}>
                        <TableCell className="font-medium">{page.page}</TableCell>
                        <TableCell>{page.views}</TableCell>
                        <TableCell>{page.avgTime}</TableCell>
                        <TableCell>{page.bounceRate}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="events" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Events (Today)</CardTitle>
              <CardDescription>User interactions tracked today</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="rounded-md border">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Event</TableHead>
                      <TableHead>Count</TableHead>
                      <TableHead>Details</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {events.map((event, index) => (
                      <TableRow key={index}>
                        <TableCell>
                          <Badge variant="outline" className="font-medium">
                            {event.event}
                          </Badge>
                        </TableCell>
                        <TableCell>{event.count}</TableCell>
                        <TableCell>{event.details}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
