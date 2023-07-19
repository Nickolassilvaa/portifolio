"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ToggleTheme() {
  const [mounted, setMounted] = useState<boolean>(false)
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <button
      aria-label="Toggle Dark Mode"
      type="button"
      className="border-2 border-zinc-300 p-1 rounded-xl hover:bg-zinc-300 dark:hover:bg-zinc-500"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      
      {theme === "dark" ? <Moon size={20} /> : <Sun size={20} />}
    
    </button>
  );
}
