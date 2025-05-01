// Analytics utility functions

type EventOptions = {
  category?: string
  label?: string
  value?: number
  nonInteraction?: boolean
  [key: string]: any
}

// Track page views
export function pageView(url: string) {
  if (typeof window !== "undefined" && (window as any).gtag) {
    ;(window as any).gtag("config", process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID, {
      page_path: url,
    })
  }
}

// Track events (button clicks, downloads, etc.)
export function event(action: string, options: EventOptions = {}) {
  if (typeof window !== "undefined" && (window as any).gtag) {
    ;(window as any).gtag("event", action, options)
  }
}

// Track ecommerce events
export const ecommerce = {
  // Track when a user views product details
  viewItem(product: { id: string; name: string; price: number; category?: string }) {
    if (typeof window !== "undefined" && (window as any).gtag) {
      ;(window as any).gtag("event", "view_item", {
        currency: "USD",
        value: product.price,
        items: [
          {
            item_id: product.id,
            item_name: product.name,
            price: product.price,
            item_category: product.category || "Ebook",
          },
        ],
      })
    }
  },

  // Track when a user initiates checkout
  beginCheckout(product: { id: string; name: string; price: number; category?: string }) {
    if (typeof window !== "undefined" && (window as any).gtag) {
      ;(window as any).gtag("event", "begin_checkout", {
        currency: "USD",
        value: product.price,
        items: [
          {
            item_id: product.id,
            item_name: product.name,
            price: product.price,
            item_category: product.category || "Ebook",
          },
        ],
      })
    }
  },

  // Track when a purchase is completed
  purchase(transaction: {
    id: string
    revenue: number
    tax?: number
    shipping?: number
    items: Array<{ id: string; name: string; price: number; category?: string }>
  }) {
    if (typeof window !== "undefined" && (window as any).gtag) {
      const items = transaction.items.map((item) => ({
        item_id: item.id,
        item_name: item.name,
        price: item.price,
        item_category: item.category || "Ebook",
      }))
      ;(window as any).gtag("event", "purchase", {
        transaction_id: transaction.id,
        value: transaction.revenue,
        currency: "USD",
        tax: transaction.tax || 0,
        shipping: transaction.shipping || 0,
        items,
      })
    }
  },
}
