"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useCart } from "@/context/cart-context"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Separator } from "@/components/ui/separator"
import { Textarea } from "@/components/ui/textarea"
import { formatCurrency } from "@/lib/utils"
import {
  CreditCard,
  ArrowLeft,
  DollarSignIcon as PaypalLogo,
  AppleIcon as AppleLogo,
  ChromeIcon as GoogleLogo,
} from "lucide-react"

export default function CheckoutPage() {
  const router = useRouter()
  const { items, subtotal, clearCart } = useCart()
  const [paymentMethod, setPaymentMethod] = useState("card")
  const [shippingMethod, setShippingMethod] = useState("standard")

  // Shipping costs
  const shippingCosts = {
    standard: 5.99,
    express: 12.99,
    overnight: 24.99,
  }

  const shippingCost = shippingCosts[shippingMethod as keyof typeof shippingCosts]
  const total = subtotal + shippingCost

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, this would process the payment
    alert("Order placed successfully! Thank you for your purchase.")
    clearCart()
    router.push("/checkout/success")
  }

  if (items.length === 0) {
    return (
      <div className="container mx-auto max-w-6xl py-12">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <h1 className="text-3xl font-bold">Your cart is empty</h1>
          <p className="text-muted-foreground">Add some items to your cart before checking out.</p>
          <Button asChild>
            <Link href="/">Continue Shopping</Link>
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto max-w-6xl py-8">
      <div className="mb-8">
        <Button variant="ghost" asChild>
          <Link href="/" className="flex items-center">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Shopping
          </Link>
        </Button>
      </div>

      <h1 className="mb-8 text-3xl font-bold">Checkout</h1>

      <div className="grid gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Contact Information */}
            <div className="space-y-4 rounded-lg border p-6">
              <h2 className="text-xl font-semibold">Contact Information</h2>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="first-name">First Name</Label>
                  <Input id="first-name" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="last-name">Last Name</Label>
                  <Input id="last-name" required />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone</Label>
                <Input id="phone" type="tel" required />
              </div>
            </div>

            {/* Shipping Address */}
            <div className="space-y-4 rounded-lg border p-6">
              <h2 className="text-xl font-semibold">Shipping Address</h2>
              <div className="space-y-2">
                <Label htmlFor="address">Street Address</Label>
                <Input id="address" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="address2">Apartment, suite, etc. (optional)</Label>
                <Input id="address2" />
              </div>
              <div className="grid gap-4 sm:grid-cols-3">
                <div className="space-y-2">
                  <Label htmlFor="city">City</Label>
                  <Input id="city" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="state">State</Label>
                  <Input id="state" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="zip">ZIP Code</Label>
                  <Input id="zip" required />
                </div>
              </div>
            </div>

            {/* Shipping Method */}
            <div className="space-y-4 rounded-lg border p-6">
              <h2 className="text-xl font-semibold">Shipping Method</h2>
              <RadioGroup value={shippingMethod} onValueChange={setShippingMethod} className="space-y-3">
                <div className="flex items-center justify-between rounded-lg border p-4">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="standard" id="standard" />
                    <Label htmlFor="standard" className="font-normal">
                      Standard Shipping (3-5 business days)
                    </Label>
                  </div>
                  <div className="font-medium">{formatCurrency(5.99)}</div>
                </div>
                <div className="flex items-center justify-between rounded-lg border p-4">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="express" id="express" />
                    <Label htmlFor="express" className="font-normal">
                      Express Shipping (2-3 business days)
                    </Label>
                  </div>
                  <div className="font-medium">{formatCurrency(12.99)}</div>
                </div>
                <div className="flex items-center justify-between rounded-lg border p-4">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="overnight" id="overnight" />
                    <Label htmlFor="overnight" className="font-normal">
                      Overnight Shipping (1 business day)
                    </Label>
                  </div>
                  <div className="font-medium">{formatCurrency(24.99)}</div>
                </div>
              </RadioGroup>
            </div>

            {/* Payment Method */}
            <div className="space-y-4 rounded-lg border p-6">
              <h2 className="text-xl font-semibold">Payment Method</h2>
              <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod} className="space-y-3">
                <div className="flex items-center justify-between rounded-lg border p-4">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="card" id="card" />
                    <Label htmlFor="card" className="flex items-center font-normal">
                      <CreditCard className="mr-2 h-5 w-5" />
                      Credit / Debit Card
                    </Label>
                  </div>
                </div>
                <div className="flex items-center justify-between rounded-lg border p-4">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="paypal" id="paypal" />
                    <Label htmlFor="paypal" className="flex items-center font-normal">
                      <PaypalLogo className="mr-2 h-5 w-5" />
                      PayPal
                    </Label>
                  </div>
                </div>
                <div className="flex items-center justify-between rounded-lg border p-4">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="apple" id="apple" />
                    <Label htmlFor="apple" className="flex items-center font-normal">
                      <AppleLogo className="mr-2 h-5 w-5" />
                      Apple Pay
                    </Label>
                  </div>
                </div>
                <div className="flex items-center justify-between rounded-lg border p-4">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="google" id="google" />
                    <Label htmlFor="google" className="flex items-center font-normal">
                      <GoogleLogo className="mr-2 h-5 w-5" />
                      Google Pay
                    </Label>
                  </div>
                </div>
              </RadioGroup>

              {paymentMethod === "card" && (
                <div className="mt-4 space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="card-number">Card Number</Label>
                    <Input id="card-number" placeholder="1234 5678 9012 3456" required />
                  </div>
                  <div className="grid gap-4 sm:grid-cols-3">
                    <div className="space-y-2">
                      <Label htmlFor="expiry">Expiry Date</Label>
                      <Input id="expiry" placeholder="MM/YY" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="cvc">CVC</Label>
                      <Input id="cvc" placeholder="123" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="zip-code">ZIP Code</Label>
                      <Input id="zip-code" placeholder="12345" required />
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Order Notes */}
            <div className="space-y-4 rounded-lg border p-6">
              <h2 className="text-xl font-semibold">Order Notes (Optional)</h2>
              <div className="space-y-2">
                <Label htmlFor="notes">Special instructions for your order</Label>
                <Textarea id="notes" placeholder="Add any special requests or delivery instructions" />
              </div>
            </div>

            <div className="lg:hidden">
              <OrderSummary items={items} subtotal={subtotal} shippingCost={shippingCost} total={total} />
              <Button type="submit" className="mt-4 w-full" size="lg">
                Place Order
              </Button>
            </div>
          </form>
        </div>

        <div className="lg:sticky lg:top-8 lg:h-fit">
          <div className="rounded-lg border p-6">
            <OrderSummary items={items} subtotal={subtotal} shippingCost={shippingCost} total={total} />
            <Button type="submit" className="mt-6 w-full" size="lg" onClick={handleSubmit}>
              Place Order
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

function OrderSummary({
  items,
  subtotal,
  shippingCost,
  total,
}: {
  items: any[]
  subtotal: number
  shippingCost: number
  total: number
}) {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Order Summary</h2>
      <div className="max-h-80 overflow-auto">
        {items.map((item) => (
          <div key={item.id} className="flex items-center py-2">
            <div className="h-16 w-16 flex-shrink-0 rounded-md border bg-muted">
              {/* Placeholder for product image */}
              <div className="h-full w-full bg-muted" />
            </div>
            <div className="ml-4 flex-1">
              <div className="font-medium">{item.name}</div>
              <div className="text-sm text-muted-foreground">
                Qty: {item.quantity} {item.size && `• Size: `}
                <span className="font-medium">{item.size}</span>
              </div>
            </div>
            <div className="font-medium">{formatCurrency(item.price * item.quantity)}</div>
          </div>
        ))}
      </div>
      <Separator />
      <div className="space-y-2">
        <div className="flex justify-between">
          <div>Subtotal</div>
          <div>{formatCurrency(subtotal)}</div>
        </div>
        <div className="flex justify-between">
          <div>Shipping</div>
          <div>{formatCurrency(shippingCost)}</div>
        </div>
        <Separator />
        <div className="flex justify-between font-medium">
          <div>Total</div>
          <div>{formatCurrency(total)}</div>
        </div>
      </div>
    </div>
  )
}
