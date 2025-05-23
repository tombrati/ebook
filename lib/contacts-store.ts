// Simple in-memory storage for development
// In production, replace this with a real database

export interface Contact {
  id: string
  name: string
  email: string
  source: string
  date: string
  status: string
  tags: string[]
}

// In-memory storage (this will reset when the server restarts)
const contacts: Contact[] = [
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
]

export function addContact(contact: Omit<Contact, "id">): Contact {
  const newContact: Contact = {
    ...contact,
    id: Date.now().toString(),
  }
  contacts.push(newContact)
  return newContact
}

export function getContacts(): Contact[] {
  return contacts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export function getContactById(id: string): Contact | undefined {
  return contacts.find((contact) => contact.id === id)
}

export function updateContact(id: string, updates: Partial<Contact>): Contact | null {
  const index = contacts.findIndex((contact) => contact.id === id)
  if (index === -1) return null

  contacts[index] = { ...contacts[index], ...updates }
  return contacts[index]
}

export function deleteContact(id: string): boolean {
  const index = contacts.findIndex((contact) => contact.id === id)
  if (index === -1) return false

  contacts.splice(index, 1)
  return true
}
