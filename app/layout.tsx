import type React from "react"
import { Inter } from "next/font/google"
import "./globals.css"
import { CartProvider } from "@/context/cart-context"
import { BrowserCompatibility } from "./browser-compatibility"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Face The Music - Ventura Co.",
  description: "Music-inspired apparel from Ventura, California",
  viewport: "width=device-width, initial-scale=1, maximum-scale=1",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="theme-color" content="#fbbf24" />
        <link rel="icon" href="/logo.png" />
      </head>
      <body className={inter.className}>
        <CartProvider>
          <BrowserCompatibility />
          {children}
        </CartProvider>
      </body>
    </html>
  )
}
