"use client"

import { useTheme } from "next-themes"
import { Sun, Moon, Laptop } from "lucide-react"
import { useAppContext } from "@/context/AppContext"
import { useEffect } from "react"

export default function ThemeToggle() {
  const { theme, setTheme, systemTheme } = useTheme();

  const { dropdownRef, open, setOpen } = useAppContext();

  const current = theme === "system" ? systemTheme : theme
  
  // Handle Escape key to close dropdown
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && open) {
        setOpen(false);
      }
    };
    
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [open, setOpen]);

  const getThemeLabel = () => {
    if (current === "dark") return "Dark theme";
    if (current === "light") return "Light theme";
    return "System theme";
  };

  return (
    <div className="relative z-40" ref={dropdownRef}>
      {/* Toggle Button */}
      <button
        onClick={() => setOpen(!open)}
        aria-label={`${getThemeLabel()} - Click to change theme`}
        aria-expanded={open}
        aria-haspopup="menu"
        aria-controls="theme-menu"
        type="button"
        className="flex items-center gap-2 rounded-sm p-2 hover focus active focus:outline-none focus:ring-2 focus:ring-primary transition-colors"
      >
        {current === "dark" && <Moon className="w-4 h-4" aria-hidden="true" />}
        {current === "light" && <Sun className="w-4 h-4" aria-hidden="true" />}
        {current === "system" && <Sun className="w-4 h-4" aria-hidden="true" />}
      </button>

      {/* Dropdown */}
      {open && (
        <div 
          id="theme-menu"
          role="menu"
          aria-label="Theme options"
          className="absolute right-0 mt-2 w-34 bg-background border border-muted rounded-md p-1 shadow-lg"
        >
          <button
            onClick={() => {
              setTheme("light");
              setOpen(false)
            }}
            role="menuitem"
            type="button"
            aria-label="Switch to light theme"
            className="flex w-full items-center gap-2 p-2 rounded text-sm hover:bg-accent active:bg-accent focus:bg-accent focus:outline-none focus:ring-2 focus:ring-primary transition-colors"
          >
            <Sun className="w-4 h-4" aria-hidden="true" /> Light
          </button>
          <button
            onClick={() => {
              setTheme("dark");
              setOpen(false)
            }}
            role="menuitem"
            type="button"
            aria-label="Switch to dark theme"
            className="flex w-full items-center gap-2 p-2 rounded text-sm hover:bg-accent active:bg-accent focus:bg-accent focus:outline-none focus:ring-2 focus:ring-primary transition-colors"
          >
            <Moon className="w-4 h-4" aria-hidden="true" /> Dark
          </button>
          <button
            onClick={() => {
              setTheme("system");
              setOpen(false)
            }}
            role="menuitem"
            type="button"
            aria-label="Use system theme preference"
            className="flex w-full items-center gap-2 p-2 rounded text-sm hover:bg-accent active:bg-accent focus:bg-accent focus:outline-none focus:ring-2 focus:ring-primary transition-colors"
          >
            <Laptop className="w-4 h-4" aria-hidden="true" /> System
          </button>
        </div>
      )}
    </div>
  )
}