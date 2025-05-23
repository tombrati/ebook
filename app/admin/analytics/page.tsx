"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend,
} from "recharts"
import {
  ArrowUpRight,
  Download,
  Users,
  CreditCard,
  TrendingUp,
  Calendar,
  BookOpen,
  MousePointer,
  Mail,
  Globe,
} from "lucide-react"

// Mock data for analytics
const salesData = [
  { date: "May 1", basic: 5, premium: 8, ultimate: 2 },
  { date: "May 2", basic: 3, premium: 10, ultimate: 4 },
  { date: "May 3", basic: 7, premium: 12, ultimate: 6 },
  { date: "May 4", basic: 4, premium: 9, ultimate: 3 },
  { date: "May 5", basic: 6, premium: 11, ultimate: 5 },
  { date: "May 6", basic: 8, premium: 14, ultimate: 7 },
  { date: "May 7", basic: 9, premium: 16, ultimate: 8 },
  { date: "May 8", basic: 7, premium: 13, ultimate: 5 },
  { date: "May 9", basic: 10, premium: 15, ultimate: 9 },
  { date: "May 10", basic: 8, premium: 12, ultimate: 6 },
  { date: "May 11", basic: 11, premium: 18, ultimate: 10 },
  { date: "May 12", basic: 9, premium: 14, ultimate: 7 },
  { date: "May 13", basic: 12, premium: 20, ultimate: 11 },
  { date: "May 14", basic: 10, premium: 17, ultimate: 9 },
]

const productDistribution = [
  { name: "Basic Edition", value: 42, color: "#94a3b8" },
  { name: "Premium Edition", value: 80, color: "#3b82f6" },
  { name: "Ultimate Edition", value: 35, color: "#8b5cf6" },
]

const trafficSourcesData = [
  { name: "Direct", value: 35, color: "#3b82f6" },
  { name: "Organic Search", value: 25, color: "#10b981" },
  { name: "Social Media", value: 20, color: "#f59e0b" },
  { name: "Referral", value: 15, color: "#8b5cf6" },
  { name: "Email", value: 5, color: "#ef4444" },
]

const conversionData = [
  { name: "Landing Page", visitors: 1200, leads: 180, customers: 45 },
  { name: "Blog", visitors: 800, leads: 60, customers: 15 },
  { name: "AI Side Hustles", visitors: 950, leads: 210, customers: 65 },
  { name: "Pricing Page", visitors: 500, leads: 50, customers: 30 },
  { name: "About Page", visitors: 300, leads: 10, customers: 5 },
]

export default function AnalyticsPage() {
  const [timeRange, setTimeRange] = useState("week")
  const [totalSales, setTotalSales] = useState(0)
  const [totalCustomers, setTotalCustomers] = useState(0)
  const [averageOrderValue, setAverageOrderValue] = useState(0)
  const [conversionRate, setConversionRate] = useState(0)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Calculate metrics based on mock data
    const calculateMetrics = () => {
      const totalBasic = salesData.reduce((sum, day) => sum + day.basic, 0)
      const totalPremium = salesData.reduce((sum, day) => sum + day.premium, 0)
      const totalUltimate = salesData.reduce((sum, day) => sum + day.ultimate, 0)

      const totalOrders = totalBasic + totalPremium + totalUltimate
      const totalRevenue = totalBasic * 19.99 + totalPremium * 39.99 + totalUltimate * 69.99

      setTotalSales(Math.round(totalRevenue))
      setTotalCustomers(totalOrders)
      setAverageOrderValue(Math.round(totalRevenue / totalOrders))
      setConversionRate(3.2)
      setIsLoading(false)
    }

    // Simulate API call
    setTimeout(calculateMetrics, 1000)
  }, [])

  const handleExportReport = () => {
    // In a real implementation, this would generate and download a report
    console.log("Exporting analytics report")
    alert("Analytics report exported")
  }

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Analytics Dashboard</h1>
        <Button variant="outline" className="gap-2" onClick={handleExportReport}>
          <Download className="h-4 w-4" /> Export Report
        </Button>
      </div>

      {isLoading ? (
        <div className="flex justify-center items-center h-64">
          <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-primary border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"></div>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Total Sales</p>
                    <h3 className="text-2xl font-bold mt-1">${totalSales}</h3>
                  </div>
                  <div className="rounded-full bg-primary/10 p-3">
                    <CreditCard className="h-5 w-5 text-primary" />
                  </div>
                </div>
                <div className="flex items-center mt-4 text-sm text-green-600">
                  <ArrowUpRight className="h-4 w-4 mr-1" />
                  <span>12% from last month</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Total Customers</p>
                    <h3 className="text-2xl font-bold mt-1">{totalCustomers}</h3>
                  </div>
                  <div className="rounded-full bg-primary/10 p-3">
                    <Users className="h-5 w-5 text-primary" />
                  </div>
                </div>
                <div className="flex items-center mt-4 text-sm text-green-600">
                  <ArrowUpRight className="h-4 w-4 mr-1" />
                  <span>8% from last month</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Avg. Order Value</p>
                    <h3 className="text-2xl font-bold mt-1">${averageOrderValue}</h3>
                  </div>
                  <div className="rounded-full bg-primary/10 p-3">
                    <TrendingUp className="h-5 w-5 text-primary" />
                  </div>
                </div>
                <div className="flex items-center mt-4 text-sm text-green-600">
                  <ArrowUpRight className="h-4 w-4 mr-1" />
                  <span>5% from last month</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Conversion Rate</p>
                    <h3 className="text-2xl font-bold mt-1">{conversionRate}%</h3>
                  </div>
                  <div className="rounded-full bg-primary/10 p-3">
                    <Calendar className="h-5 w-5 text-primary" />
                  </div>
                </div>
                <div className="flex items-center mt-4 text-sm text-green-600">
                  <ArrowUpRight className="h-4 w-4 mr-1" />
                  <span>2% from last month</span>
                </div>
              </CardContent>
            </Card>
          </div>

          <Tabs defaultValue="sales" className="mb-8">
            <TabsList>
              <TabsTrigger value="sales">Sales Overview</TabsTrigger>
              <TabsTrigger value="products">Product Distribution</TabsTrigger>
              <TabsTrigger value="traffic">Traffic Sources</TabsTrigger>
              <TabsTrigger value="conversion">Conversion Funnel</TabsTrigger>
            </TabsList>

            <TabsContent value="sales" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Sales by Product</CardTitle>
                  <CardDescription>
                    <div className="flex gap-4">
                      <Button
                        variant={timeRange === "week" ? "default" : "outline"}
                        size="sm"
                        onClick={() => setTimeRange("week")}
                      >
                        Week
                      </Button>
                      <Button
                        variant={timeRange === "month" ? "default" : "outline"}
                        size="sm"
                        onClick={() => setTimeRange("month")}
                      >
                        Month
                      </Button>
                      <Button
                        variant={timeRange === "year" ? "default" : "outline"}
                        size="sm"
                        onClick={() => setTimeRange("year")}
                      >
                        Year
                      </Button>
                    </div>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-[300px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart
                        data={salesData}
                        margin={{
                          top: 20,
                          right: 30,
                          left: 20,
                          bottom: 5,
                        }}
                      >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="date" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="basic" name="Basic Edition" fill="#94a3b8" />
                        <Bar dataKey="premium" name="Premium Edition" fill="#3b82f6" />
                        <Bar dataKey="ultimate" name="Ultimate Edition" fill="#8b5cf6" />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="products">
              <Card>
                <CardHeader>
                  <CardTitle>Product Distribution</CardTitle>
                  <CardDescription>Breakdown of sales by product</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-[300px] flex items-center justify-center">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={productDistribution}
                          cx="50%"
                          cy="50%"
                          labelLine={false}
                          outerRadius={100}
                          fill="#8884d8"
                          dataKey="value"
                          label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                        >
                          {productDistribution.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                          ))}
                        </Pie>
                        <Tooltip />
                        <Legend />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="traffic">
              <Card>
                <CardHeader>
                  <CardTitle>Traffic Sources</CardTitle>
                  <CardDescription>Where your visitors are coming from</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="h-[300px] flex items-center justify-center">
                      <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                          <Pie
                            data={trafficSourcesData}
                            cx="50%"
                            cy="50%"
                            labelLine={false}
                            outerRadius={100}
                            fill="#8884d8"
                            dataKey="value"
                            label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                          >
                            {trafficSourcesData.map((entry, index) => (
                              <Cell key={`cell-${index}`} fill={entry.color} />
                            ))}
                          </Pie>
                          <Tooltip />
                          <Legend />
                        </PieChart>
                      </ResponsiveContainer>
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-lg font-medium">Top Traffic Sources</h3>

                      <div className="space-y-6">
                        <div>
                          <div className="flex items-center justify-between mb-1">
                            <div className="flex items-center">
                              <Globe className="h-4 w-4 mr-2 text-blue-500" />
                              <span className="text-sm font-medium">Direct</span>
                            </div>
                            <span className="text-sm font-medium">35%</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div className="bg-blue-500 h-2 rounded-full" style={{ width: "35%" }}></div>
                          </div>
                        </div>

                        <div>
                          <div className="flex items-center justify-between mb-1">
                            <div className="flex items-center">
                              <MousePointer className="h-4 w-4 mr-2 text-green-500" />
                              <span className="text-sm font-medium">Organic Search</span>
                            </div>
                            <span className="text-sm font-medium">25%</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div className="bg-green-500 h-2 rounded-full" style={{ width: "25%" }}></div>
                          </div>
                        </div>

                        <div>
                          <div className="flex items-center justify-between mb-1">
                            <div className="flex items-center">
                              <Users className="h-4 w-4 mr-2 text-yellow-500" />
                              <span className="text-sm font-medium">Social Media</span>
                            </div>
                            <span className="text-sm font-medium">20%</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div className="bg-yellow-500 h-2 rounded-full" style={{ width: "20%" }}></div>
                          </div>
                        </div>

                        <div>
                          <div className="flex items-center justify-between mb-1">
                            <div className="flex items-center">
                              <BookOpen className="h-4 w-4 mr-2 text-purple-500" />
                              <span className="text-sm font-medium">Referral</span>
                            </div>
                            <span className="text-sm font-medium">15%</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div className="bg-purple-500 h-2 rounded-full" style={{ width: "15%" }}></div>
                          </div>
                        </div>

                        <div>
                          <div className="flex items-center justify-between mb-1">
                            <div className="flex items-center">
                              <Mail className="h-4 w-4 mr-2 text-red-500" />
                              <span className="text-sm font-medium">Email</span>
                            </div>
                            <span className="text-sm font-medium">5%</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div className="bg-red-500 h-2 rounded-full" style={{ width: "5%" }}></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="conversion">
              <Card>
                <CardHeader>
                  <CardTitle>Conversion Funnel</CardTitle>
                  <CardDescription>Visitor to customer journey by page</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-[300px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart
                        data={conversionData}
                        margin={{
                          top: 20,
                          right: 30,
                          left: 20,
                          bottom: 5,
                        }}
                      >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="visitors" name="Visitors" fill="#94a3b8" />
                        <Bar dataKey="leads" name="Leads" fill="#3b82f6" />
                        <Bar dataKey="customers" name="Customers" fill="#8b5cf6" />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                    <Card>
                      <CardContent className="p-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-sm font-medium text-muted-foreground">Visitor to Lead</p>
                            <h3 className="text-xl font-bold mt-1">15.2%</h3>
                          </div>
                          <div className="rounded-full bg-blue-100 p-2">
                            <Users className="h-4 w-4 text-blue-600" />
                          </div>
                        </div>
                        <div className="flex items-center mt-2 text-xs text-green-600">
                          <ArrowUpRight className="h-3 w-3 mr-1" />
                          <span>3.1% from last month</span>
                        </div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardContent className="p-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-sm font-medium text-muted-foreground">Lead to Customer</p>
                            <h3 className="text-xl font-bold mt-1">21.8%</h3>
                          </div>
                          <div className="rounded-full bg-purple-100 p-2">
                            <CreditCard className="h-4 w-4 text-purple-600" />
                          </div>
                        </div>
                        <div className="flex items-center mt-2 text-xs text-green-600">
                          <ArrowUpRight className="h-3 w-3 mr-1" />
                          <span>5.4% from last month</span>
                        </div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardContent className="p-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-sm font-medium text-muted-foreground">Overall Conversion</p>
                            <h3 className="text-xl font-bold mt-1">3.3%</h3>
                          </div>
                          <div className="rounded-full bg-green-100 p-2">
                            <TrendingUp className="h-4 w-4 text-green-600" />
                          </div>
                        </div>
                        <div className="flex items-center mt-2 text-xs text-green-600">
                          <ArrowUpRight className="h-3 w-3 mr-1" />
                          <span>1.2% from last month</span>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </>
      )}
    </div>
  )
}
