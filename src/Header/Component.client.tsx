'use client'
import { useHeaderTheme } from '@/providers/HeaderTheme'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react'

import type { Header } from '@/payload-types'

import { Logo } from '@/components/Logo/Logo'

interface HeaderClientProps {
  data: Header
  currentPath?: string
}

// @typescript-eslint/no-explicit-any Ignore this rule because it's a type utility
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Flatten<T> = T extends any[] ? T[number] : T
type FlattenHeaderNavItems = Flatten<Header['navItems']>
type HeaderNavItem = NonNullable<FlattenHeaderNavItems>
type HeaderLink = HeaderNavItem['link']

export const HeaderClient: React.FC<HeaderClientProps> = ({ data }) => {
  /* Storing the value in a useState to avoid hydration errors */
  const [theme, setTheme] = useState<string | null>(null)
  const { headerTheme, setHeaderTheme } = useHeaderTheme()
  const pathname = usePathname()

  useEffect(() => {
    setHeaderTheme(null)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname])

  useEffect(() => {
    if (headerTheme && headerTheme !== theme) setTheme(headerTheme)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [headerTheme])

  const getLinkUrl = (link: HeaderLink) => {
    if (link.url) return link.url
    if (link.reference?.value && typeof link.reference.value !== 'number') {
      const { slug } = link.reference.value
      return `/${slug}`
    }

    return '/'
  }

  const isActive = (link: string) => {
    if (pathname.includes(link)) {
      return 'text-primary'
    }
    return ''
  }

  return (
    <header
      className="bg-background fixed top-0 w-full z-20"
      {...(theme ? { 'data-theme': theme } : {})}
    >
      <div className="container mx-auto">
        <div className="pt-4 pb-4 flex justify-between">
          <Link href="/">
            <Logo loading="eager" priority="high" />
          </Link>
          <nav className="flex items-center gap-4 sm:gap-24">
            {data?.navItems?.map((item) => (
              <Link
                href={getLinkUrl(item.link)}
                key={item.id}
                className={[
                  'text-[18px] sm:text-[20px] font-medium hover:text-primary ease-linear duration-200',
                  isActive(getLinkUrl(item.link)),
                ].join(' ')}
                target={item.link.newTab ? '_blank' : undefined}
              >
                {item.link.label}
              </Link>
            ))}
            <Link href="https://bit.ly/getheimafromwebsite" className="button hidden sm:block">
              Get Heima
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}
