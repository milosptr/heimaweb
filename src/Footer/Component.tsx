import { getCachedGlobal } from '@/utilities/getGlobals'
import Link from 'next/link'
import React from 'react'

import type { Footer, Media } from '@/payload-types'

import { CMSLink } from '@/components/Link'
import { Logo } from '@/components/Logo/Logo'
import { Fade } from 'react-awesome-reveal'
import Image from 'next/image'

export async function Footer() {
  const footerData: Footer = await getCachedGlobal('footer', 1)()

  const navItems = footerData?.navItems || []
  const socials = footerData?.socialLinks || []
  const image = footerData?.image as NonNullable<Media> | undefined

  return (
    <section className="h-screen flex flex-col justify-end">
      {!!image && (
        <Fade triggerOnce delay={300} fraction={0.5}>
          <div className="flex justify-center mb-10">
            <Image
              src={image.url!}
              alt={image.alt!}
              width={200}
              height={200}
              className="w-full max-h-[40vh] sm:max-h-[55vh]"
            />
          </div>
        </Fade>
      )}
      <footer className="bg-primary">
        <div className="container ">
          <div className="py-8 gap-8 flex flex-col md:flex-row md:justify-between">
            <div>
              <Link className="flex items-start sm:items-center" href="/">
                <Logo variant="white" />
              </Link>
              <nav className="flex flex-col gap-1 mt-5">
                {navItems.map(({ link }, i) => {
                  return (
                    <CMSLink
                      className="text-white text-secondary hover:underline text-xl"
                      key={i}
                      {...link}
                    />
                  )
                })}
              </nav>
            </div>
            <div className="text-white">
              <div className="flex gap-5 mb-3">
                {socials?.map((social, i) => (
                  <Link key={i} href={social.link}>
                    <Image
                      src={`/socials/${social.platform}.svg`}
                      alt={social.platform}
                      width={30}
                      height={30}
                    />
                  </Link>
                ))}
              </div>
              <Link
                className="flex items-center text-secondary text-xl mb-3 hover:underline"
                href="mailto:hello@getheima.com"
              >
                hello@getheima.com
              </Link>
              <p>{new Date().getFullYear()} &copy; HEIMA Software ehf.</p>
              <p>All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </section>
  )
}
