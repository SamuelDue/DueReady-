"use client"

import { useState } from "react"
import { signIn, getSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { AlertCircle, Eye, EyeOff } from "lucide-react"

export default function SignInPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setLoading(true)

    try {
      const result = await signIn("credentials", {
        email,
        password,
        redirect: false
      })

      if (result?.error) {
        setError("Invalid email or password")
      } else {
        // Refresh session and redirect to dashboard
        await getSession()
        router.push("/dashboard")
      }
    } catch (error) {
      setError("An unexpected error occurred")
    } finally {
      setLoading(false)
    }
  }

  const handleDemoLogin = async () => {
    setLoading(true)
    setError("")
    
    // Demo login with test credentials
    try {
      const result = await signIn("credentials", {
        email: "demo@dueready.com",
        password: "demo123",
        redirect: false
      })

      if (result?.error) {
        setError("Demo login failed")
      } else {
        await getSession()
        router.push("/dashboard")
      }
    } catch (error) {
      setError("Demo login failed")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-950 to-gray-900 flex items-center justify-center p-6">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <Link href="/" className="inline-block">
            <img 
              src="/dueready-logo-dark.svg" 
              alt="DueReady" 
              className="h-12 w-auto mx-auto"
            />
          </Link>
          <h1 className="mt-4 text-2xl font-bold text-white font-[family-name:var(--font-space-grotesk)]">
            Welcome to AutoDiligence
          </h1>
          <p className="text-gray-400 mt-2">
            Sign in to access your deal readiness platform
          </p>
        </div>

        <Card className="bg-white/5 border-white/10">
          <CardHeader>
            <CardTitle className="text-white">Sign In</CardTitle>
            <CardDescription className="text-gray-400">
              Enter your credentials to access your dashboard
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              {error && (
                <div className="flex items-center gap-2 p-3 bg-red-900/20 border border-red-500/30 rounded-md">
                  <AlertCircle className="w-4 h-4 text-red-400" />
                  <span className="text-red-400 text-sm">{error}</span>
                </div>
              )}

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="bg-white/5 border-white/20 text-white placeholder-gray-500"
                />
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-2">
                  Password
                </label>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
                    required
                    className="bg-white/5 border-white/20 text-white placeholder-gray-500 pr-10"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              <Button 
                type="submit" 
                className="w-full bg-blue-600 hover:bg-blue-700"
                disabled={loading}
              >
                {loading ? "Signing in..." : "Sign In"}
              </Button>
            </form>

            {/* Demo Login */}
            <div className="mt-6 pt-6 border-t border-white/10">
              <Button 
                onClick={handleDemoLogin}
                variant="outline"
                className="w-full border-white/20 text-white hover:bg-white/10"
                disabled={loading}
              >
                {loading ? "Loading..." : "Try Demo Account"}
              </Button>
              <p className="text-xs text-gray-500 text-center mt-2">
                Use demo account to explore the platform
              </p>
            </div>

            {/* Links */}
            <div className="mt-6 text-center space-y-2">
              <Link 
                href="/auth/signup" 
                className="text-sm text-blue-400 hover:text-blue-300"
              >
                Don't have an account? Sign up
              </Link>
              <br />
              <Link 
                href="/" 
                className="text-sm text-gray-400 hover:text-white"
              >
                ← Back to website
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
} 