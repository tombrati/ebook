import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BarChart, Users, FileText, Mail, BookOpen, DollarSign, ArrowRight } from "lucide-react"
import AnalyticsDashboardWidget from "@/components/analytics-dashboard-widget"

export default function AdminDashboard() {
  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Admin Dashboard</h1>
        <div className="text-sm text-muted-foreground">Last updated: {new Date().toLocaleString()}</div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2">
              <BarChart className="h-5 w-5 text-primary" />
              Analytics
            </CardTitle>
            <CardDescription>View sales and traffic data</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">
              Track sales performance, visitor statistics, and conversion rates.
            </p>
            <Button asChild variant="outline" className="w-full">
              <Link href="/admin/analytics" className="flex items-center justify-between">
                View Analytics <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2">
              <Mail className="h-5 w-5 text-primary" />
              Contacts
            </CardTitle>
            <CardDescription>Manage leads and contacts</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">
              View and manage all contacts, leads, and form submissions.
            </p>
            <Button asChild variant="outline" className="w-full">
              <Link href="/admin/contacts" className="flex items-center justify-between">
                View Contacts <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2">
              <FileText className="h-5 w-5 text-primary" />
              Orders
            </CardTitle>
            <CardDescription>Manage customer orders</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">
              View, process, and manage all customer orders and downloads.
            </p>
            <Button asChild variant="outline" className="w-full">
              <Link href="/admin/orders" className="flex items-center justify-between">
                View Orders <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2">
              <Users className="h-5 w-5 text-primary" />
              Customers
            </CardTitle>
            <CardDescription>Manage customer accounts</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">
              View customer information, purchase history, and engagement.
            </p>
            <Button asChild variant="outline" className="w-full">
              <Link href="/admin/customers" className="flex items-center justify-between">
                View Customers <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2">
              <BookOpen className="h-5 w-5 text-primary" />
              Products
            </CardTitle>
            <CardDescription>Manage your products</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">
              Add, edit, and manage your ebooks, guides, and digital products.
            </p>
            <Button asChild variant="outline" className="w-full">
              <Link href="/admin/products" className="flex items-center justify-between">
                View Products <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2">
              <DollarSign className="h-5 w-5 text-primary" />
              Payments
            </CardTitle>
            <CardDescription>Manage payment transactions</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">
              View payment history, refunds, and transaction details.
            </p>
            <Button asChild variant="outline" className="w-full">
              <Link href="/admin/payments" className="flex items-center justify-between">
                View Payments <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Quick Stats</CardTitle>
          <CardDescription>Overview of your website performance</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-muted p-4 rounded-lg">
              <div className="text-sm font-medium text-muted-foreground">Total Sales</div>
              <div className="text-2xl font-bold mt-1">$4,385</div>
              <div className="text-xs text-green-600 mt-1">↑ 12% from last month</div>
            </div>

            <div className="bg-muted p-4 rounded-lg">
              <div className="text-sm font-medium text-muted-foreground">New Customers</div>
              <div className="text-2xl font-bold mt-1">157</div>
              <div className="text-xs text-green-600 mt-1">↑ 8% from last month</div>
            </div>

            <div className="bg-muted p-4 rounded-lg">
              <div className="text-sm font-medium text-muted-foreground">New Leads</div>
              <div className="text-2xl font-bold mt-1">512</div>
              <div className="text-xs text-green-600 mt-1">↑ 15% from last month</div>
            </div>

            <div className="bg-muted p-4 rounded-lg">
              <div className="text-sm font-medium text-muted-foreground">Conversion Rate</div>
              <div className="text-2xl font-bold mt-1">3.2%</div>
              <div className="text-xs text-green-600 mt-1">↑ 2% from last month</div>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        <AnalyticsDashboardWidget />

        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>Latest actions on your website</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="rounded-full bg-blue-100 p-2">
                  <Users className="h-4 w-4 text-blue-600" />
                </div>
                <div>
                  <p className="text-sm font-medium">New lead captured</p>
                  <p className="text-xs text-muted-foreground">5 minutes ago</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="rounded-full bg-green-100 p-2">
                  <DollarSign className="h-4 w-4 text-green-600" />
                </div>
                <div>
                  <p className="text-sm font-medium">New purchase completed</p>
                  <p className="text-xs text-muted-foreground">23 minutes ago</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="rounded-full bg-purple-100 p-2">
                  <FileText className="h-4 w-4 text-purple-600" />
                </div>
                <div>
                  <p className="text-sm font-medium">Free guide downloaded</p>
                  <p className="text-xs text-muted-foreground">42 minutes ago</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
