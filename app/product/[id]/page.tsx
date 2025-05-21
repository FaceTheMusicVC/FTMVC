"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { ArrowLeft, ShoppingCart, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useCart } from "@/context/cart-context"
import { formatCurrency } from "@/lib/utils"

// Mock product data - in a real app, this would come from a database
const products = [
  {
    id: "rock-legends-tshirt",
    name: "Rock Legends T-Shirt",
    price: 29.99,
    description:
      "Vintage-inspired design celebrating rock icons. This comfortable t-shirt features a unique graphic design that pays homage to the greatest rock legends of all time. Made from 100% cotton for a soft feel and lasting durability.",
    image: "/placeholder.svg?height=400&width=400",
    sizes: ["XS", "S", "M", "L", "XL", "XXL", "3XL"],
  },
  {
    id: "vinyl-vibes-hoodie",
    name: "Vinyl Vibes Hoodie",
    price: 49.99,
    description:
      "Cozy hoodie with retro record player design. Perfect for music lovers, this premium hoodie features a detailed illustration of a classic record player. The soft fleece interior keeps you warm while showing off your passion for vinyl.",
    image: "/placeholder.svg?height=400&width=400",
    sizes: ["XS", "S", "M", "L", "XL", "XXL", "3XL"],
  },
  {
    id: "sound-wave-tee",
    name: "Sound Wave Tee",
    price: 27.99,
    description:
      "Minimalist design featuring audio waveform art. This sleek t-shirt displays a sound wave pattern that represents the visual rhythm of music. Made from a premium cotton blend that's both comfortable and durable.",
    image: "/placeholder.svg?height=400&width=400",
    sizes: ["XS", "S", "M", "L", "XL", "XXL", "3XL"],
  },
]

export default function ProductPage({ params }: { params: { id: string } }) {
  const router = useRouter()
  const { addItem } = useCart()
  const [selectedSize, setSelectedSize] = useState("")
  const [quantity, setQuantity] = useState(1)
  const [isAddingToCart, setIsAddingToCart] = useState(false)

  // Review form state
  const [reviewName, setReviewName] = useState("")
  const [reviewText, setReviewText] = useState("")
  const [reviewRating, setReviewRating] = useState(5)
  const [reviewSubmitted, setReviewSubmitted] = useState(false)

  // Find the product by ID
  const product = products.find((p) => p.id === params.id)

  if (!product) {
    return (
      <div className="container mx-auto max-w-6xl py-12">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <h1 className="text-3xl font-bold">Product Not Found</h1>
          <p className="text-muted-foreground">The product you're looking for doesn't exist.</p>
          <Button asChild>
            <Link href="/">Back to Home</Link>
          </Button>
        </div>
      </div>
    )
  }

  const handleAddToCart = () => {
    if (!selectedSize && product.sizes.length > 0) {
      alert("Please select a size")
      return
    }

    setIsAddingToCart(true)

    // Simulate a slight delay for better UX
    setTimeout(() => {
      addItem({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        quantity,
        size: selectedSize,
      })

      setIsAddingToCart(false)

      // Show confirmation
      alert(`${product.name} added to cart!`)
    }, 500)
  }

  const handleReviewSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, this would send the review to a database
    console.log({
      productId: product.id,
      name: reviewName,
      text: reviewText,
      rating: reviewRating,
    })

    setReviewSubmitted(true)

    // Reset form
    setTimeout(() => {
      setReviewName("")
      setReviewText("")
      setReviewRating(5)
      setReviewSubmitted(false)
    }, 3000)
  }

  return (
    <div className="container mx-auto max-w-6xl py-8">
      <div className="mb-8">
        <Button variant="ghost" asChild>
          <Link href="/collection" className="flex items-center">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Collection
          </Link>
        </Button>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        <div className="rounded-lg border bg-muted p-2">
          <Image
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            width={600}
            height={600}
            className="h-full w-full rounded-md object-cover"
            priority
          />
        </div>

        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold">{product.name}</h1>
            <div className="mt-2 text-2xl font-semibold">{formatCurrency(product.price)}</div>
          </div>

          <div>
            <h2 className="text-lg font-medium">Description</h2>
            <p className="mt-2 text-muted-foreground">{product.description}</p>
          </div>

          {product.sizes.length > 0 && (
            <div>
              <h2 className="mb-4 text-lg font-medium">Size</h2>
              <div className="mb-2 text-sm text-muted-foreground">Select from XS to 3XL</div>
              <RadioGroup
                value={selectedSize}
                onValueChange={setSelectedSize}
                className="grid grid-cols-4 gap-2 sm:grid-cols-7"
              >
                {product.sizes.map((size) => (
                  <div key={size} className="flex items-center">
                    <RadioGroupItem value={size} id={`size-${size}`} className="peer sr-only" />
                    <Label
                      htmlFor={`size-${size}`}
                      className="flex h-10 w-full cursor-pointer items-center justify-center rounded-md border peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-primary/10 peer-data-[state=checked]:text-primary"
                    >
                      {size}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
              <div className="mt-2 text-xs text-muted-foreground">
                <span className="font-medium">Size Guide:</span> XS (30-32"), S (34-36"), M (38-40"), L (42-44"), XL
                (46-48"), XXL (50-52"), 3XL (54-56")
              </div>
            </div>
          )}

          <div>
            <h2 className="mb-4 text-lg font-medium">Quantity</h2>
            <div className="flex items-center space-x-2">
              <Button variant="outline" size="icon" onClick={() => setQuantity(Math.max(1, quantity - 1))}>
                -
              </Button>
              <span className="w-8 text-center">{quantity}</span>
              <Button variant="outline" size="icon" onClick={() => setQuantity(quantity + 1)}>
                +
              </Button>
            </div>
          </div>

          <Button className="mt-6 w-full" size="lg" onClick={handleAddToCart} disabled={isAddingToCart}>
            <ShoppingCart className="mr-2 h-5 w-5" />
            {isAddingToCart ? "Adding to Cart..." : "Add to Cart"}
          </Button>
        </div>
      </div>

      {/* Review Form */}
      <div className="mt-16 border-t pt-8">
        <h2 className="text-2xl font-bold mb-6">Write a Review</h2>
        {reviewSubmitted ? (
          <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded">
            Thank you for your review! It will be displayed on our site if it receives a 5-star rating.
          </div>
        ) : (
          <form onSubmit={handleReviewSubmit} className="space-y-4">
            <div>
              <Label htmlFor="review-name">Your Name</Label>
              <input
                id="review-name"
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                value={reviewName}
                onChange={(e) => setReviewName(e.target.value)}
                required
              />
            </div>

            <div>
              <Label htmlFor="review-text">Your Review</Label>
              <Textarea
                id="review-text"
                className="mt-1"
                value={reviewText}
                onChange={(e) => setReviewText(e.target.value)}
                required
              />
            </div>

            <div>
              <Label>Rating</Label>
              <div className="flex items-center mt-1">
                {[1, 2, 3, 4, 5].map((rating) => (
                  <button key={rating} type="button" className="p-1" onClick={() => setReviewRating(rating)}>
                    <Star
                      className={`h-6 w-6 ${
                        rating <= reviewRating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                      }`}
                    />
                  </button>
                ))}
              </div>
            </div>

            <Button type="submit">Submit Review</Button>
          </form>
        )}
      </div>
    </div>
  )
}
