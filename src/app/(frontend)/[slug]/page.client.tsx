'use client'
import { useHeaderTheme } from '@/providers/HeaderTheme'
import React, { useEffect } from 'react'

const PageClient: React.FC = () => {
  /* Force the header to be dark mode while we have an image behind it */
  const { setHeaderTheme } = useHeaderTheme()

  useEffect(() => {
    scrollTo({
      top: 0,
      behavior: 'smooth',
    })
    if (window.location.pathname !== '/') return
    document.querySelector('html')?.classList?.add('home')

    return () => {
      document.querySelector('html')?.classList?.remove('home')
    }
  }, [])

  useEffect(() => {
    setHeaderTheme('light')
  }, [setHeaderTheme])
  return <React.Fragment />
}

export default PageClient
