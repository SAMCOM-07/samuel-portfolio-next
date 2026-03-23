"use client"

import { useTheme } from "next-themes"
import { Sun, Moon, Laptop } from "lucide-react"
import { useAppContext } from "@/context/AppContext"
import { useEffect, useState } from "react"

export default function ThemeToggle() {
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false)

  const { dropdownRef, open, setOpen } = useAppContext();

  // Prevent hydration mismatch by only rendering theme UI after mount
  useEffect(() => {
    setMounted(true)
  }, [])

  const current = theme === "system" ? systemTheme : theme
  
  return (
    <div className="relative z-40" ref={dropdownRef}>
      {/* Toggle Button */}
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 rounded-sm p-2 hover focus active"
      >
        {mounted && current === "dark" && <Moon className="w-4 h-4" />}
        {mounted && current === "light" && <Sun className="w-4 h-4" />}
        {mounted && current === "system" && <Sun className="w-4 h-4" />}
      </button>

      {/* Dropdown */}
      {open && (
        <div className="absolute right-0 mt-2 w-34 bg-background border border-muted rounded-md p-1">
          <button
            onClick={() => {
              setTheme("light");
              setOpen(false)
            }}
            className="flex w-full items-center gap-2 p-2 rounded text-sm hover:bg-accent active:bg-accent focus:bg-accent"
          >
            <Sun className="w-4 h-4" /> Light
          </button>
          <button
            onClick={() => {
              setTheme("dark");
              setOpen(false)
            }}
            className="flex w-full items-center gap-2 p-2 rounded text-sm hover:bg-accent active:bg-accent focus:bg-accent"
          >
            <Moon className="w-4 h-4" /> Dark
          </button>
          <button
            onClick={() => {
              setTheme("system");
              setOpen(false)
            }}
            className="flex w-full items-center gap-2 p-2 rounded text-sm hover:bg-accent active:bg-accent focus:bg-accent"
          >
            <Laptop className="w-4 h-4" /> System
          </button>
        </div>
      )}
    </div>
  )
}
