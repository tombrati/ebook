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
  if (typeof window !== "undefined" && (window as any).gtag && process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID) {
    ;(window as any).gtag("config", process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID, {
      page_path: url,
    })
  }
}

// Track events (button clicks, downloads, etc.)
export function event(action: string, options: EventOptions = {}) {
  if (typeof window !== "undefined" && (window as any).gtag) {
    ;(window as any).gtag("event", action, options)
    console.log(`Event tracked: ${action}`, options)
  }
}

// Track form submissions
export function trackFormSubmission(formName: string, success = true) {
  event("form_submission", {
    category: "Forms",
    label: formName,
    value: success ? 1 : 0,
  })
}

// Track downloads
export function trackDownload(fileName: string, fileType = "pdf") {
  event("file_download", {
    category: "Downloads",
    label: fileName,
    file_type: fileType,
  })
}

// Track outbound links
export function trackOutboundLink(url: string, linkText = "") {
  event("outbound_link_click", {
    category: "Outbound Links",
    label: linkText || url,
    url: url,
  })
}

// Track social media interactions
export function trackSocialInteraction(network: string, action = "share") {
  event("social_interaction", {
    category: "Social",
    label: network,
    action: action,
  })
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
      console.log(`Product view tracked: ${product.name}`)
    }
  },

  // Track when a user adds an item to cart
  addToCart(product: { id: string; name: string; price: number; category?: string; quantity?: number }) {
    if (typeof window !== "undefined" && (window as any).gtag) {
      ;(window as any).gtag("event", "add_to_cart", {
        currency: "USD",
        value: product.price * (product.quantity || 1),
        items: [
          {
            item_id: product.id,
            item_name: product.name,
            price: product.price,
            item_category: product.category || "Ebook",
            quantity: product.quantity || 1,
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
      console.log(`Checkout initiated for: ${product.name}`)
    }
  },

  // Track when a purchase is completed
  purchase(transaction: {
    id: string
    revenue: number
    tax?: number
    shipping?: number
    items: Array<{ id: string; name: string; price: number; category?: string; quantity?: number }>
  }) {
    if (typeof window !== "undefined" && (window as any).gtag) {
      const items = transaction.items.map((item) => ({
        item_id: item.id,
        item_name: item.name,
        price: item.price,
        item_category: item.category || "Ebook",
        quantity: item.quantity || 1,
      }))
      ;(window as any).gtag("event", "purchase", {
        transaction_id: transaction.id,
        value: transaction.revenue,
        currency: "USD",
        tax: transaction.tax || 0,
        shipping: transaction.shipping || 0,
        items,
      })
      console.log(`Purchase tracked: ${transaction.id} - $${transaction.revenue}`)
    }
  },
}
