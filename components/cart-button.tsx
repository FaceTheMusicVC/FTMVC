"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useCart } from "@/context/cart-context"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { formatCurrency } from "@/lib/utils"

export function CartButton() {
  const { items, removeItem, updateQuantity, itemCount, subtotal } = useCart()
  const [open, setOpen] = useState(false)
  const [mounted, setMounted] = useState(false)

  // This ensures hydration issues don't occur
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <Button variant="outline" size="icon" className="relative">
        <ShoppingCart className="h-5 w-5" />
      </Button>
    )
  }

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="relative">
          <ShoppingCart className="h-5 w-5" />
          {itemCount > 0 && (
            <span className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-xs text-primary-foreground">
              {itemCount}
            </span>
          )}
        </Button>
      </SheetTrigger>
      <SheetContent className="w-full sm:max-w-md">
        <SheetHeader>
          <SheetTitle>Your Cart ({itemCount} items)</SheetTitle>
        </SheetHeader>
        <div className="mt-8 flex h-full flex-col">
          {items.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center space-y-2">
              <ShoppingCart className="h-12 w-12 text-muted-foreground" />
              <div className="text-xl font-medium">Your cart is empty</div>
              <div className="text-sm text-muted-foreground">Add items to your cart to see them here.</div>
              <Button className="mt-4" onClick={() => setOpen(false)}>
                Continue Shopping
              </Button>
            </div>
          ) : (
            <>
              <div className="flex-1 overflow-auto py-4">
                <div className="space-y-4">
                  {items.map((item) => (
                    <div key={item.id} className="flex items-center space-x-4">
                      <div className="h-16 w-16 rounded-md border bg-muted">
                        {/* Placeholder for product image */}
                        <div className="h-full w-full bg-muted" />
                      </div>
                      <div className="flex-1 space-y-1">
                        <div className="font-medium">{item.name}</div>
                        {item.size && (
                          <div className="text-sm text-muted-foreground">
                            Size: <span className="font-medium">{item.size}</span>
                          </div>
                        )}
                        <div className="text-sm font-medium">{formatCurrency(item.price)}</div>
                        <div className="flex items-center space-x-2">
                          <Button
                            variant="outline"
                            size="icon"
                            className="h-6 w-6"
                            onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                          >
                            -
                          </Button>
                          <span className="w-6 text-center">{item.quantity}</span>
                          <Button
                            variant="outline"
                            size="icon"
                            className="h-6 w-6"
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          >
                            +
                          </Button>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="h-6 px-2 text-xs"
                            onClick={() => removeItem(item.id)}
                          >
                            Remove
                          </Button>
                        </div>
                      </div>
                      <div className="font-medium">{formatCurrency(item.price * item.quantity)}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="border-t pt-4">
                <div className="flex justify-between py-2">
                  <div>Subtotal</div>
                  <div className="font-medium">{formatCurrency(subtotal)}</div>
                </div>
                <div className="flex justify-between py-2">
                  <div>Shipping</div>
                  <div className="font-medium">Calculated at checkout</div>
                </div>
                <div className="flex justify-between py-2 font-medium">
                  <div>Total</div>
                  <div>{formatCurrency(subtotal)}</div>
                </div>
                <div className="mt-4 space-y-2">
                  <Button className="w-full" size="lg" asChild onClick={() => setOpen(false)}>
                    <Link href="/checkout">Proceed to Checkout</Link>
                  </Button>
                  <Button variant="outline" className="w-full" size="lg" onClick={() => setOpen(false)}>
                    Continue Shopping
                  </Button>
                </div>
              </div>
            </>
          )}
        </div>
      </SheetContent>
    </Sheet>
  )
}
