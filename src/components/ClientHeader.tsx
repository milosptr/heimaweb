'use client'

import React from 'react'
import { usePathname } from 'next/navigation'
import { Header } from '@/Header/Component'

export default function ClientHeader() {
  const currentPath = usePathname()

  return <Header currentPath={currentPath} />
}
