'use client'
import { ThemeProvider } from "next-themes"
import { useEffect, useState } from "react"

export default function Providers({children}: {children: React.ReactNode}) {
  const [mounted, setMounted] = useState<boolean>(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <>{children}</>
  }
  
  return (
    <ThemeProvider attribute='class' storageKey="@theme-nickolas-app" enableSystem={false} >
      {children}
    </ThemeProvider>
  )
} 
