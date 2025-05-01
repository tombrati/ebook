import type React from "react"
import Link from "next/link"
import { BarChart, Settings, Users, FileText } from "lucide-react"

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen bg-background">
      {/* Sidebar */}
      <div className="w-64 border-r bg-card">
        <div className="p-6">
          <h2 className="text-xl font-bold">Admin Panel</h2>
        </div>
        <nav className="px-4 py-2">
          <ul className="space-y-1">
            <li>
              <Link
                href="/admin/dashboard"
                className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground"
              >
                <BarChart className="h-4 w-4" />
                Dashboard
              </Link>
            </li>
            <li>
              <Link
                href="/admin/orders"
                className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground"
              >
                <FileText className="h-4 w-4" />
                Orders
              </Link>
            </li>
            <li>
              <Link
                href="/admin/customers"
                className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground"
              >
                <Users className="h-4 w-4" />
                Customers
              </Link>
            </li>
            <li>
              <Link
                href="/admin/settings"
                className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground"
              >
                <Settings className="h-4 w-4" />
                Settings
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      {/* Main content */}
      <div className="flex-1 overflow-auto">{children}</div>
    </div>
  )
}
