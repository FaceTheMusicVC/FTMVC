import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { CartButton } from "@/components/cart-button"
import {
  ChevronRight,
  ArrowRight,
  Music,
  Shirt,
  ShoppingBag,
  Mail,
  Phone,
  MapPin,
  Instagram,
  Facebook,
  Twitter,
  Star,
} from "lucide-react"

// Mock 5-star reviews
const fiveStarReviews = [
  {
    id: 1,
    name: "Alex Rivera",
    location: "Ventura, CA",
    text: "I get compliments every time I wear my Face The Music tee. The designs are unique and the quality is amazing. I've already ordered three more!",
  },
  {
    id: 2,
    name: "Jamie Chen",
    location: "Los Angeles, CA",
    text: "As a musician myself, I love how these shirts capture the essence of different music styles. The designs are thoughtful and the shirts are super comfortable.",
  },
  {
    id: 3,
    name: "Taylor Morgan",
    location: "San Diego, CA",
    text: "I bought a shirt as a gift for my boyfriend who's a huge music fan, and he absolutely loves it. The shipping was fast and the packaging was eco-friendly too!",
  },
]

export default function Home() {
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
            <Link href="#features" className="text-sm font-medium transition-colors hover:text-primary">
              Our Story
            </Link>
            <Link href="/collection" className="text-sm font-medium transition-colors hover:text-primary">
              Collection
            </Link>
            <Link href="#reviews" className="text-sm font-medium transition-colors hover:text-primary">
              Reviews
            </Link>
            <Link href="#contact" className="text-sm font-medium transition-colors hover:text-primary">
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <CartButton />
            <Button size="sm" asChild>
              <Link href="/collection">
                Shop Now <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-amber-400">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-black">
                    Where Music Meets Fashion
                  </h1>
                  <p className="max-w-[600px] text-black md:text-xl">
                    Unique apparel inspired by the passion and energy of music. Wear your sound.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button size="lg" className="bg-black text-white hover:bg-black/80" asChild>
                    <Link href="/collection">
                      Shop Collection
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button variant="outline" size="lg" className="border-black text-black hover:bg-black/10" asChild>
                    <Link
                      href={`mailto:FaceTheMusic@gmail.com?subject=Design%20Recommendation&body=I'd%20like%20to%20recommend%20a%20design%20for%20your%20next%20collection:`}
                    >
                      Give Us a Recommendation
                    </Link>
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <Image
                  src="/logo.png"
                  width={550}
                  height={550}
                  alt="Face The Music Logo"
                  className="mx-auto w-full max-w-[300px] lg:max-w-[400px]"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* Our Story Section */}
        <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                  Our Story
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Born from a Love of Music</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
                  Face The Music was founded on a deep passion and love for music with the vision of creating unique art
                  inspired by sound and rhythm.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <div className="space-y-4">
                <p className="text-muted-foreground">
                  Founded by David Ibanez in Ventura, CA, Face The Music began with a simple idea: to capture the
                  emotion and energy of music through wearable art. Each design tells a story, inspired by different
                  genres, artists, and musical movements that have shaped our culture.
                </p>
                <p className="text-muted-foreground">
                  What started as a passion project has grown into a brand that celebrates the universal language of
                  music through fashion. Our shirts aren't just clothing – they're a statement about the music that
                  moves you.
                </p>
                <p className="text-muted-foreground">
                  We believe that like a powerful song, great design can evoke emotion, spark conversation, and bring
                  people together. That's why each piece in our collection is thoughtfully created to resonate with
                  music lovers of all kinds.
                </p>
              </div>
              <div className="grid gap-6">
                <div className="flex gap-4 items-start">
                  <Music className="h-8 w-8 text-primary flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold">Music-Inspired Designs</h3>
                    <p className="text-muted-foreground">
                      Every design is born from the rhythm, lyrics, and emotion of the music we love.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <Shirt className="h-8 w-8 text-primary flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold">Quality Materials</h3>
                    <p className="text-muted-foreground">
                      Premium fabrics that feel as good as they look, wash after wash.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <ShoppingBag className="h-8 w-8 text-primary flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold">Locally Produced</h3>
                    <p className="text-muted-foreground">Proudly designed and printed in Ventura, California.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Products Section */}
        <section id="products" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Featured Collection</div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Shop Our Latest Designs</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
                  Explore our newest music-inspired apparel, from classic rock to hip-hop and everything in between.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              {/* Product 1 */}
              <Link href="/product/rock-legends-tshirt" className="group relative overflow-hidden rounded-lg border">
                <div className="aspect-square overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=400&width=400"
                    width={400}
                    height={400}
                    alt="Rock Legends T-Shirt"
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold">Rock Legends T-Shirt</h3>
                  <p className="text-sm text-muted-foreground">Vintage-inspired design celebrating rock icons</p>
                  <div className="mt-2 flex items-center justify-between">
                    <span className="font-medium">$29.99</span>
                    <Button size="sm" variant="outline">
                      View Details
                    </Button>
                  </div>
                </div>
              </Link>

              {/* Product 2 */}
              <Link href="/product/vinyl-vibes-hoodie" className="group relative overflow-hidden rounded-lg border">
                <div className="aspect-square overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=400&width=400"
                    width={400}
                    height={400}
                    alt="Vinyl Vibes Hoodie"
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold">Vinyl Vibes Hoodie</h3>
                  <p className="text-sm text-muted-foreground">Cozy hoodie with retro record player design</p>
                  <div className="mt-2 flex items-center justify-between">
                    <span className="font-medium">$49.99</span>
                    <Button size="sm" variant="outline">
                      View Details
                    </Button>
                  </div>
                </div>
              </Link>

              {/* Product 3 */}
              <Link href="/product/sound-wave-tee" className="group relative overflow-hidden rounded-lg border">
                <div className="aspect-square overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=400&width=400"
                    width={400}
                    height={400}
                    alt="Sound Wave Tee"
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold">Sound Wave Tee</h3>
                  <p className="text-sm text-muted-foreground">Minimalist design featuring audio waveform art</p>
                  <div className="mt-2 flex items-center justify-between">
                    <span className="font-medium">$27.99</span>
                    <Button size="sm" variant="outline">
                      View Details
                    </Button>
                  </div>
                </div>
              </Link>
            </div>
            <div className="flex justify-center">
              <Button size="lg" asChild>
                <Link href="/collection">
                  View All Products
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* 5-Star Reviews Section */}
        <section id="reviews" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                  5-Star Reviews
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">What Our Customers Love</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
                  See what our happiest customers have to say about our music-inspired apparel.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-3">
              {fiveStarReviews.map((review) => (
                <div key={review.id} className="rounded-lg border bg-background p-6">
                  <div className="flex flex-col gap-4">
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-muted-foreground">"{review.text}"</p>
                    <div className="flex items-center gap-4">
                      <div className="rounded-full bg-muted h-10 w-10"></div>
                      <div>
                        <p className="font-medium">{review.name}</p>
                        <p className="text-sm text-muted-foreground">{review.location}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                  Contact Us
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Get in Touch</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
                  Questions about our products? Want to collaborate? We'd love to hear from you.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-2">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <Mail className="h-6 w-6 text-primary" />
                  <div>
                    <h3 className="font-bold">Email</h3>
                    <p className="text-muted-foreground">FaceTheMusic@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Phone className="h-6 w-6 text-primary" />
                  <div>
                    <h3 className="font-bold">Phone</h3>
                    <p className="text-muted-foreground">(661) 520-6556</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <MapPin className="h-6 w-6 text-primary" />
                  <div>
                    <h3 className="font-bold">Location</h3>
                    <p className="text-muted-foreground">Ventura, CA</p>
                  </div>
                </div>
                <div className="pt-4">
                  <h3 className="font-bold mb-2">Follow Us</h3>
                  <div className="flex gap-4">
                    <Link href="#" className="text-muted-foreground hover:text-primary">
                      <Instagram className="h-6 w-6" />
                      <span className="sr-only">Instagram</span>
                    </Link>
                    <Link href="#" className="text-muted-foreground hover:text-primary">
                      <Facebook className="h-6 w-6" />
                      <span className="sr-only">Facebook</span>
                    </Link>
                    <Link href="#" className="text-muted-foreground hover:text-primary">
                      <Twitter className="h-6 w-6" />
                      <span className="sr-only">Twitter</span>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="space-y-4 rounded-lg border p-6">
                <div className="grid gap-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label
                        htmlFor="first-name"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        First name
                      </label>
                      <Input id="first-name" placeholder="John" />
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="last-name"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Last name
                      </label>
                      <Input id="last-name" placeholder="Doe" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="email"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Email
                    </label>
                    <Input id="email" placeholder="john.doe@example.com" type="email" />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="message"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Message
                    </label>
                    <Textarea id="message" placeholder="Your message here..." className="min-h-[120px]" />
                  </div>
                </div>
                <Button className="w-full">Send Message</Button>
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Join Our Community</h2>
                <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed">
                  Subscribe to get updates on new releases, exclusive discounts, and music inspiration.
                </p>
              </div>
              <div className="w-full max-w-md space-y-2">
                <form className="flex space-x-2">
                  <Input className="max-w-lg flex-1" placeholder="Enter your email" type="email" />
                  <Button type="submit">Subscribe</Button>
                </form>
                <p className="text-xs text-muted-foreground">
                  By subscribing, you agree to our terms and privacy policy.
                </p>
              </div>
            </div>
          </div>
        </section>
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
