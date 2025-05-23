"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Badge } from "@/components/ui/badge"
import { Download, Filter, MoreHorizontal, Search, Mail, ArrowDownUp } from "lucide-react"

// Mock data - in a real implementation, this would come from your database
const mockContacts = [
  {
    id: "1",
    name: "John Smith",
    email: "john.smith@example.com",
    source: "Landing Page",
    date: "2023-05-15T10:30:00Z",
    status: "New",
    tags: ["Lead", "Free Guide"],
  },
  {
    id: "2",
    name: "Sarah Johnson",
    email: "sarah.j@example.com",
    source: "Newsletter Signup",
    date: "2023-05-14T14:45:00Z",
    status: "Contacted",
    tags: ["Subscriber"],
  },
  {
    id: "3",
    name: "Michael Brown",
    email: "michael.b@example.com",
    source: "Contact Form",
    date: "2023-05-13T09:15:00Z",
    status: "Responded",
    tags: ["Customer", "Premium"],
  },
  {
    id: "4",
    name: "Emily Davis",
    email: "emily.d@example.com",
    source: "AI Side Hustles",
    date: "2023-05-12T16:20:00Z",
    status: "New",
    tags: ["Lead", "Free Guide"],
  },
  {
    id: "5",
    name: "Robert Wilson",
    email: "robert.w@example.com",
    source: "Book Purchase",
    date: "2023-05-11T11:10:00Z",
    status: "Customer",
    tags: ["Customer", "Ultimate"],
  },
  {
    id: "6",
    name: "Jennifer Lee",
    email: "jennifer.l@example.com",
    source: "Landing Page",
    date: "2023-05-10T13:25:00Z",
    status: "New",
    tags: ["Lead", "Free Guide"],
  },
  {
    id: "7",
    name: "David Martinez",
    email: "david.m@example.com",
    source: "Newsletter Signup",
    date: "2023-05-09T15:40:00Z",
    status: "Subscribed",
    tags: ["Subscriber"],
  },
  {
    id: "8",
    name: "Lisa Anderson",
    email: "lisa.a@example.com",
    source: "Contact Form",
    date: "2023-05-08T10:05:00Z",
    status: "Responded",
    tags: ["Lead", "Question"],
  },
  {
    id: "9",
    name: "James Taylor",
    email: "james.t@example.com",
    source: "AI Side Hustles",
    date: "2023-05-07T09:30:00Z",
    status: "New",
    tags: ["Lead", "Free Guide"],
  },
  {
    id: "10",
    name: "Patricia Moore",
    email: "patricia.m@example.com",
    source: "Book Purchase",
    date: "2023-05-06T14:15:00Z",
    status: "Customer",
    tags: ["Customer", "Basic"],
  },
]

export default function ContactsPage() {
  const [contacts, setContacts] = useState(mockContacts)
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedFilter, setSelectedFilter] = useState("All")
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate loading data
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  // Filter contacts based on search term and selected filter
  const filteredContacts = contacts.filter((contact) => {
    const matchesSearch =
      contact.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      contact.email.toLowerCase().includes(searchTerm.toLowerCase())

    if (selectedFilter === "All") return matchesSearch
    if (selectedFilter === "Leads") return matchesSearch && contact.tags.includes("Lead")
    if (selectedFilter === "Customers") return matchesSearch && contact.tags.includes("Customer")
    if (selectedFilter === "Subscribers") return matchesSearch && contact.tags.includes("Subscriber")

    return matchesSearch
  })

  const handleExportCSV = () => {
    // In a real implementation, this would generate and download a CSV file
    console.log("Exporting contacts to CSV")
    alert("Contacts exported to CSV")
  }

  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    }).format(date)
  }

  const getStatusColor = (status) => {
    switch (status) {
      case "New":
        return "bg-blue-100 text-blue-800"
      case "Contacted":
        return "bg-yellow-100 text-yellow-800"
      case "Responded":
        return "bg-green-100 text-green-800"
      case "Customer":
        return "bg-purple-100 text-purple-800"
      case "Subscribed":
        return "bg-indigo-100 text-indigo-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Contacts & Leads</h1>
        <Button variant="outline" className="gap-2" onClick={handleExportCSV}>
          <Download className="h-4 w-4" /> Export CSV
        </Button>
      </div>

      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Search contacts..."
            className="pl-10"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="gap-2">
              <Filter className="h-4 w-4" /> Filter: {selectedFilter}
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem onClick={() => setSelectedFilter("All")}>All Contacts</DropdownMenuItem>
            <DropdownMenuItem onClick={() => setSelectedFilter("Leads")}>Leads</DropdownMenuItem>
            <DropdownMenuItem onClick={() => setSelectedFilter("Customers")}>Customers</DropdownMenuItem>
            <DropdownMenuItem onClick={() => setSelectedFilter("Subscribers")}>Subscribers</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <Card>
        <CardHeader className="pb-2">
          <CardTitle>Contact List</CardTitle>
          <CardDescription>
            {isLoading ? "Loading contacts..." : `Showing ${filteredContacts.length} of ${contacts.length} contacts`}
          </CardDescription>
        </CardHeader>
        <CardContent>
          {isLoading ? (
            <div className="flex justify-center items-center h-64">
              <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-primary border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"></div>
            </div>
          ) : (
            <div className="rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[250px]">
                      <div className="flex items-center gap-1 cursor-pointer">
                        Name <ArrowDownUp className="h-3 w-3" />
                      </div>
                    </TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Source</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Tags</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredContacts.length === 0 ? (
                    <TableRow>
                      <TableCell colSpan={7} className="text-center h-24 text-muted-foreground">
                        No contacts found
                      </TableCell>
                    </TableRow>
                  ) : (
                    filteredContacts.map((contact) => (
                      <TableRow key={contact.id}>
                        <TableCell className="font-medium">{contact.name}</TableCell>
                        <TableCell>{contact.email}</TableCell>
                        <TableCell>{contact.source}</TableCell>
                        <TableCell>{formatDate(contact.date)}</TableCell>
                        <TableCell>
                          <span
                            className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(contact.status)}`}
                          >
                            {contact.status}
                          </span>
                        </TableCell>
                        <TableCell>
                          <div className="flex flex-wrap gap-1">
                            {contact.tags.map((tag) => (
                              <Badge key={tag} variant="outline" className="text-xs">
                                {tag}
                              </Badge>
                            ))}
                          </div>
                        </TableCell>
                        <TableCell className="text-right">
                          <div className="flex justify-end gap-2">
                            <Button size="icon" variant="ghost" title="Send Email">
                              <Mail className="h-4 w-4" />
                            </Button>
                            <DropdownMenu>
                              <DropdownMenuTrigger asChild>
                                <Button size="icon" variant="ghost">
                                  <MoreHorizontal className="h-4 w-4" />
                                </Button>
                              </DropdownMenuTrigger>
                              <DropdownMenuContent align="end">
                                <DropdownMenuItem>View Details</DropdownMenuItem>
                                <DropdownMenuItem>Edit Contact</DropdownMenuItem>
                                <DropdownMenuItem className="text-red-600">Delete</DropdownMenuItem>
                              </DropdownMenuContent>
                            </DropdownMenu>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))
                  )}
                </TableBody>
              </Table>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
