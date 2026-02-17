"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useTheme } from "next-themes"
import { Moon, Sun } from "lucide-react"
import { useState, useEffect } from "react"

export default function Navbar() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="text-xl font-bold text-primary">
            Wealth Guardian
          </Link>
        </div>
        <nav className="hidden md:flex gap-6">
          <Link href="/" className="text-sm font-medium">
            Home
          </Link>
          <Link href="/features" className="text-sm font-medium">
            Features
          </Link>
          <Link href="/about" className="text-sm font-medium">
            About
          </Link>
        </nav>
        <div className="flex items-center gap-2">
          {mounted && (
            <Button
              variant="ghost"
              size="icon"
              aria-label="Toggle Theme"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
          )}
          <Link href="/login">
            <Button variant="outline" className="hidden sm:inline-flex">
              Login
            </Button>
          </Link>
          <Link href="/signup">
            <Button className="hidden sm:inline-flex">Sign Up</Button>
          </Link>
        </div>
      </div>
    </header>
  )
}
