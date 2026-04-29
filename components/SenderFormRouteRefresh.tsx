'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

type SenderFormsApi = {
  render?: () => void
}

declare global {
  interface Window {
    senderForms?: SenderFormsApi
  }
}

export default function SenderFormRouteRefresh() {
  const pathname = usePathname()

  useEffect(() => {
    const rerenderForms = () => {
      window.senderForms?.render?.()
    }

    rerenderForms()
    const timeoutId = window.setTimeout(rerenderForms, 250)
    return () => window.clearTimeout(timeoutId)
  }, [pathname])

  return null
}

