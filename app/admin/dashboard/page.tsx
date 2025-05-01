"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts"
import { ArrowUpRight, Download, Users, CreditCard, TrendingUp, Calendar } from "lucide-react"

// Mock data - in a real implementation, this would come from your database
const mockSalesData = [
  { date: "2023-01-01", basic: 5, premium: 8, ultimate: 2 },
  { date: "2023-01-02", basic: 3, premium: 10, ultimate: 4 },
  { date: "2023-01-03", basic: 7, premium: 12, ultimate: 6 },
  { date: "2023-01-04", basic: 4, premium: 9, ultimate: 3 },
  { date: "2023-01-05", basic: 6, premium: 11, ultimate: 5 },
  { date: "2023-01-06", basic: 8, premium: 14, ultimate: 7 },
  { date: "2023-01-07", basic: 9, premium: 16, ultimate: 8 },
]

const productDistribution = [
  { name: "Basic Edition", value: 42, color: "#94a3b8" },
  { name: "Premium Edition", value: 80, color: "#3b82f6" },
  { name: "Ultimate Edition", value: 35, color: "#8b5cf6" },
]

const COLORS = ["#94a3b8", "#3b82f6", "#8b5cf6"]

export default function AdminDashboard() {
  const [timeRange, setTimeRange] = useState("week")
  const [totalSales, setTotalSales] = useState(0)
  const [totalCustomers, setTotalCustomers] = useState(0)
  const [averageOrderValue, setAverageOrderValue] = useState(0)

  useEffect(() => {
    // Calculate metrics based on mock data
    // In a real implementation, this would be fetched from your API
    const calculateMetrics = () => {
      const totalBasic = mockSalesData.reduce((sum, day) => sum + day.basic, 0)
      const totalPremium = mockSalesData.reduce((sum, day) => sum + day.premium, 0)
      const totalUltimate = mockSalesData.reduce((sum, day) => sum + day.ultimate, 0)

      const totalOrders = totalBasic + totalPremium + totalUltimate
      const totalRevenue = totalBasic * 19.99 + totalPremium * 39.99 + totalUltimate * 69.99

      setTotalSales(Math.round(totalRevenue))
      setTotalCustomers(totalOrders)
      setAverageOrderValue(Math.round(totalRevenue / totalOrders))
    }

    calculateMetrics()
  }, [])

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Sales Dashboard</h1>
        <Button variant="outline" className="gap-2">
          <Download className="h-4 w-4" /> Export Report
        </Button>
      </div>

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
                <h3 className="text-2xl font-bold mt-1">3.2%</h3>
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
                    data={mockSalesData}
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
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
