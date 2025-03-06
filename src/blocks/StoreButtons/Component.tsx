import { StoreButtonsBlock as SBB } from '@/payload-types'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export const StoreButtonsBlock: React.FC<SBB> = (props) => {
  const { AppleStoreLink, AppleStoreImage, GooglePlayLink, GooglePlayImage } = props
  const appStore = AppleStoreImage as { url: string; alt: string }
  const googlePlay = GooglePlayImage as { url: string; alt: string }

  return (
    <div className="flex gap-6 lg:gap-10 mt-6 lg:mt-10">
      <Link href={AppleStoreLink} target="_blank" className="block">
        <Image
          src={appStore.url}
          alt={appStore.alt}
          width={180}
          height={100}
          className="w-[100px] lg:w-[150px]"
        />
      </Link>
      <Link href={GooglePlayLink} target="_blank" className="block">
        <Image
          src={googlePlay.url}
          alt={googlePlay.alt}
          width={180}
          height={100}
          className="w-[100px] lg:w-[150px]"
        />
      </Link>
    </div>
  )
}
