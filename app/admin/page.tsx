"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function AdminPage() {
  const router = useRouter()
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  // Add these state variables after the existing useState declarations
  const [isRecovering, setIsRecovering] = useState(false)
  const [phoneNumber, setPhoneNumber] = useState("")
  const [confirmationCode, setConfirmationCode] = useState("")
  const [newPassword, setNewPassword] = useState("")
  const [newUsername, setNewUsername] = useState("")
  const [recoveryStep, setRecoveryStep] = useState(1)
  const [recoveryError, setRecoveryError] = useState("")

  // This is a simple authentication for demo purposes
  // In a real application, you would use a proper authentication system
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    // Updated credentials as specified by the user
    if (username === "MilkMan12" && password === "FaceMusicMilk614!") {
      setIsAuthenticated(true)
      setError("")
    } else {
      setError("Invalid username or password")
    }
  }

  const handleRecoveryRequest = (e: React.FormEvent) => {
    e.preventDefault()
    // Check if the phone number matches
    if (phoneNumber === "6615206556") {
      // In a real app, this would send an SMS with a code
      // For demo purposes, we'll just move to the next step
      setRecoveryStep(2)
      setRecoveryError("")
    } else {
      setRecoveryError("Phone number not recognized")
    }
  }

  const handleConfirmCode = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, this would verify the code from SMS
    // For demo purposes, any 6-digit code will work
    if (confirmationCode.length === 6 && /^\d+$/.test(confirmationCode)) {
      setRecoveryStep(3)
      setRecoveryError("")
    } else {
      setRecoveryError("Please enter a valid 6-digit code")
    }
  }

  const handleResetCredentials = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, this would update credentials in a database
    // For demo purposes, we'll just show a success message
    alert("Your credentials have been reset successfully! Please log in with your new information.")
    setIsRecovering(false)
    setRecoveryStep(1)
    setUsername(newUsername)
    setPassword("")
  }

  if (!isAuthenticated) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-muted/40 p-4">
        <Card className="w-full max-w-md">
          {!isRecovering ? (
            <>
              <CardHeader>
                <CardTitle className="text-2xl">Admin Login</CardTitle>
                <CardDescription>Log in to manage your Face The Music store</CardDescription>
              </CardHeader>
              <form onSubmit={handleLogin}>
                <CardContent className="space-y-4">
                  {error && <div className="rounded-md bg-destructive/15 p-3 text-sm text-destructive">{error}</div>}
                  <div className="space-y-2">
                    <Label htmlFor="username">Username</Label>
                    <Input id="username" value={username} onChange={(e) => setUsername(e.target.value)} required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="password">Password</Label>
                    <Input
                      id="password"
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </div>
                  <Button type="button" variant="link" className="px-0 text-sm" onClick={() => setIsRecovering(true)}>
                    Forgot username or password?
                  </Button>
                </CardContent>
                <CardFooter>
                  <Button type="submit" className="w-full">
                    Log In
                  </Button>
                </CardFooter>
              </form>
            </>
          ) : (
            <>
              <CardHeader>
                <CardTitle className="text-2xl">Account Recovery</CardTitle>
                <CardDescription>Reset your admin credentials</CardDescription>
              </CardHeader>
              {recoveryStep === 1 && (
                <form onSubmit={handleRecoveryRequest}>
                  <CardContent className="space-y-4">
                    {recoveryError && (
                      <div className="rounded-md bg-destructive/15 p-3 text-sm text-destructive">{recoveryError}</div>
                    )}
                    <div className="space-y-2">
                      <Label htmlFor="phone-number">Phone Number</Label>
                      <Input
                        id="phone-number"
                        placeholder="Enter your phone number"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        required
                      />
                      <p className="text-xs text-muted-foreground">
                        Enter the phone number associated with your account
                      </p>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button type="button" variant="outline" onClick={() => setIsRecovering(false)}>
                      Back to Login
                    </Button>
                    <Button type="submit">Send Code</Button>
                  </CardFooter>
                </form>
              )}

              {recoveryStep === 2 && (
                <form onSubmit={handleConfirmCode}>
                  <CardContent className="space-y-4">
                    {recoveryError && (
                      <div className="rounded-md bg-destructive/15 p-3 text-sm text-destructive">{recoveryError}</div>
                    )}
                    <div className="space-y-2">
                      <Label htmlFor="confirmation-code">Confirmation Code</Label>
                      <Input
                        id="confirmation-code"
                        placeholder="Enter 6-digit code"
                        value={confirmationCode}
                        onChange={(e) => setConfirmationCode(e.target.value)}
                        required
                      />
                      <p className="text-xs text-muted-foreground">Enter the 6-digit code sent to your phone</p>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button type="button" variant="outline" onClick={() => setRecoveryStep(1)}>
                      Back
                    </Button>
                    <Button type="submit">Verify Code</Button>
                  </CardFooter>
                </form>
              )}

              {recoveryStep === 3 && (
                <form onSubmit={handleResetCredentials}>
                  <CardContent className="space-y-4">
                    {recoveryError && (
                      <div className="rounded-md bg-destructive/15 p-3 text-sm text-destructive">{recoveryError}</div>
                    )}
                    <div className="space-y-2">
                      <Label htmlFor="new-username">New Username</Label>
                      <Input
                        id="new-username"
                        placeholder="Enter new username"
                        value={newUsername}
                        onChange={(e) => setNewUsername(e.target.value)}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="new-password">New Password</Label>
                      <Input
                        id="new-password"
                        type="password"
                        placeholder="Enter new password"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                        required
                      />
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button type="button" variant="outline" onClick={() => setRecoveryStep(2)}>
                      Back
                    </Button>
                    <Button type="submit">Reset Credentials</Button>
                  </CardFooter>
                </form>
              )}
            </>
          )}
        </Card>
      </div>
    )
  }

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2 font-bold text-xl">
            <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground">
              F
            </div>
            <span>Face The Music Admin</span>
          </div>
          <Button
            variant="ghost"
            onClick={() => {
              setIsAuthenticated(false)
              router.push("/")
            }}
          >
            Logout
          </Button>
        </div>
      </header>

      <main className="flex-1 container py-6">
        <h1 className="text-3xl font-bold mb-6">Dashboard</h1>

        <Tabs defaultValue="products">
          <TabsList className="mb-4">
            <TabsTrigger value="products">Products</TabsTrigger>
            <TabsTrigger value="promotions">Promotions</TabsTrigger>
            <TabsTrigger value="orders">Orders</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>

          <TabsContent value="products" className="space-y-4">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold">Manage Products</h2>
              <Button>Add New Product</Button>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {/* Sample Product Card */}
              <Card>
                <CardHeader className="p-4">
                  <CardTitle className="text-lg">Rock Legends T-Shirt</CardTitle>
                  <CardDescription>$29.99</CardDescription>
                </CardHeader>
                <CardContent className="p-4 pt-0">
                  <p className="text-sm text-muted-foreground">Vintage-inspired design celebrating rock icons</p>
                </CardContent>
                <CardFooter className="p-4 flex justify-between">
                  <Button variant="outline" size="sm">
                    Edit
                  </Button>
                  <Button variant="destructive" size="sm">
                    Delete
                  </Button>
                </CardFooter>
              </Card>

              {/* Sample Product Card */}
              <Card>
                <CardHeader className="p-4">
                  <CardTitle className="text-lg">Vinyl Vibes Hoodie</CardTitle>
                  <CardDescription>$49.99</CardDescription>
                </CardHeader>
                <CardContent className="p-4 pt-0">
                  <p className="text-sm text-muted-foreground">Cozy hoodie with retro record player design</p>
                </CardContent>
                <CardFooter className="p-4 flex justify-between">
                  <Button variant="outline" size="sm">
                    Edit
                  </Button>
                  <Button variant="destructive" size="sm">
                    Delete
                  </Button>
                </CardFooter>
              </Card>

              {/* Sample Product Card */}
              <Card>
                <CardHeader className="p-4">
                  <CardTitle className="text-lg">Sound Wave Tee</CardTitle>
                  <CardDescription>$27.99</CardDescription>
                </CardHeader>
                <CardContent className="p-4 pt-0">
                  <p className="text-sm text-muted-foreground">Minimalist design featuring audio waveform art</p>
                </CardContent>
                <CardFooter className="p-4 flex justify-between">
                  <Button variant="outline" size="sm">
                    Edit
                  </Button>
                  <Button variant="destructive" size="sm">
                    Delete
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="promotions" className="space-y-4">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold">Manage Promotions</h2>
              <Button>Create New Promotion</Button>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {/* Sample Promotion Card */}
              <Card>
                <CardHeader className="p-4">
                  <CardTitle className="text-lg">Summer Sale</CardTitle>
                  <CardDescription>Active until August 31, 2025</CardDescription>
                </CardHeader>
                <CardContent className="p-4 pt-0">
                  <p className="text-sm text-muted-foreground">20% off all t-shirts</p>
                </CardContent>
                <CardFooter className="p-4 flex justify-between">
                  <Button variant="outline" size="sm">
                    Edit
                  </Button>
                  <Button variant="destructive" size="sm">
                    Delete
                  </Button>
                </CardFooter>
              </Card>

              {/* Sample Promotion Card */}
              <Card>
                <CardHeader className="p-4">
                  <CardTitle className="text-lg">New Customer Discount</CardTitle>
                  <CardDescription>Ongoing</CardDescription>
                </CardHeader>
                <CardContent className="p-4 pt-0">
                  <p className="text-sm text-muted-foreground">10% off first order with code WELCOME</p>
                </CardContent>
                <CardFooter className="p-4 flex justify-between">
                  <Button variant="outline" size="sm">
                    Edit
                  </Button>
                  <Button variant="destructive" size="sm">
                    Delete
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="orders" className="space-y-4">
            <h2 className="text-2xl font-bold">Recent Orders</h2>
            <div className="rounded-md border">
              <div className="p-4">
                <p className="text-sm text-muted-foreground">No orders to display yet.</p>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="settings" className="space-y-4">
            <h2 className="text-2xl font-bold">Store Settings</h2>
            <Card>
              <CardHeader>
                <CardTitle>General Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="store-name">Store Name</Label>
                  <Input id="store-name" defaultValue="Face The Music" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="store-email">Contact Email</Label>
                  <Input id="store-email" defaultValue="FaceTheMusic@gmail.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="store-phone">Contact Phone</Label>
                  <Input id="store-phone" defaultValue="(661) 520-6556" />
                </div>
              </CardContent>
              <CardFooter>
                <Button>Save Changes</Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </main>

      <footer className="border-t py-6">
        <div className="container">
          <p className="text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} Face The Music Admin Dashboard
          </p>
        </div>
      </footer>
    </div>
  )
}
