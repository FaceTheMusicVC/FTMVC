import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { CartButton } from "@/components/cart-button"
import { ArrowLeft } from "lucide-react"
import { formatCurrency } from "@/lib/utils"

// Mock product data - in a real app, this would come from a database
const products = [
  {
    id: "rock-legends-tshirt",
    name: "Rock Legends T-Shirt",
    price: 29.99,
    description: "Vintage-inspired design celebrating rock icons",
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    id: "vinyl-vibes-hoodie",
    name: "Vinyl Vibes Hoodie",
    price: 49.99,
    description: "Cozy hoodie with retro record player design",
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    id: "sound-wave-tee",
    name: "Sound Wave Tee",
    price: 27.99,
    description: "Minimalist design featuring audio waveform art",
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    id: "hip-hop-classics-tee",
    name: "Hip Hop Classics Tee",
    price: 32.99,
    description: "Celebrate the golden age of hip hop with this stylish tee",
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    id: "guitar-silhouette-hoodie",
    name: "Guitar Silhouette Hoodie",
    price: 54.99,
    description: "Featuring the iconic silhouette of an electric guitar",
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    id: "music-festival-tank",
    name: "Music Festival Tank",
    price: 24.99,
    description: "Perfect for summer festivals and outdoor concerts",
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    id: "dj-turntable-tee",
    name: "DJ Turntable Tee",
    price: 29.99,
    description: "For the electronic music lovers and vinyl enthusiasts",
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    id: "band-tour-hoodie",
    name: "Band Tour Hoodie",
    price: 59.99,
    description: "Designed like a vintage band tour merchandise item",
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    id: "music-notes-tee",
    name: "Music Notes Tee",
    price: 26.99,
    description: "Classic design featuring musical notation",
    image: "/placeholder.svg?height=400&width=400",
  },
]

export default function CollectionPage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center gap-2">
              <Image src="/logo.png" alt="Face The Music Logo" width={40} height={40} className="h-10 w-auto" />
              <span className="font-bold text-xl hidden sm:inline-block">Face The Music</span>
            </Link>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="/" className="text-sm font-medium transition-colors hover:text-primary">
              Home
            </Link>
            <Link href="/collection" className="text-sm font-medium transition-colors hover:text-primary">
              Collection
            </Link>
            <Link href="#contact" className="text-sm font-medium transition-colors hover:text-primary">
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <CartButton />
          </div>
        </div>
      </header>

      <main className="flex-1">
        <div className="container py-8">
          <div className="mb-8 flex items-center justify-between">
            <div>
              <Button variant="ghost" asChild className="mb-4">
                <Link href="/" className="flex items-center">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Home
                </Link>
              </Button>
              <h1 className="text-3xl font-bold">Our Collection</h1>
              <p className="mt-2 text-muted-foreground">Browse our complete collection of music-inspired apparel</p>
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {products.map((product) => (
              <Link
                key={product.id}
                href={`/product/${product.id}`}
                className="group relative overflow-hidden rounded-lg border"
              >
                <div className="aspect-square overflow-hidden">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    width={400}
                    height={400}
                    alt={product.name}
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold">{product.name}</h3>
                  <p className="text-sm text-muted-foreground">{product.description}</p>
                  <div className="mt-2 flex items-center justify-between">
                    <span className="font-medium">{formatCurrency(product.price)}</span>
                    <Button size="sm" variant="outline">
                      View Details
                    </Button>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <div className="flex items-center gap-2">
            <Image src="/logo.png" alt="Face The Music Logo" width={30} height={30} className="h-8 w-auto" />
            <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
              © {new Date().getFullYear()} Face The Music. All rights reserved.
            </p>
          </div>
          <div className="flex gap-4">
            <Link href="#" className="text-sm text-muted-foreground hover:underline underline-offset-4">
              Terms
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:underline underline-offset-4">
              Privacy
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:underline underline-offset-4">
              Shipping
            </Link>
            <Link href="/admin" className="text-sm text-muted-foreground hover:underline underline-offset-4">
              Admin
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
