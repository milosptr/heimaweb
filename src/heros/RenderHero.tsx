import React from 'react'

import type { Media, Page } from '@/payload-types'
import { Fade } from 'react-awesome-reveal'
import { RenderBlocks } from '@/blocks/RenderBlocks'
import Image from 'next/image'

export const RenderHero: React.FC<Page['hero']> = (props) => {
  const { heading, description, image, StoreButtons } = props || {}
  const heroImage = image as NonNullable<Media>
  const hasImage = heroImage && heroImage.url
  const blocks = StoreButtons ?? []

  if (!heading && !description && !image) {
    return null
  }

  return (
    <div className="container h-screen flex items-center justify-center snap-center snap-mandatory">
      <Fade triggerOnce delay={500} fraction={0.5}>
        <div className="grid grid-cols-1 md:grid-cols-2 items-end gap-4">
          <div className="order-2 sm:order-1 lg:pb-5">
            <h1>{heading}</h1>
            <p className="description-text mt-4 lg:mt-8">{description}</p>
            <div className="relative">
              <RenderBlocks blocks={[...blocks]} />
            </div>
          </div>
          <div className="flex justify-start sm:justify-end order-1 sm:order-2">
            {!!hasImage && (
              <Image
                src={heroImage.url!}
                alt={heroImage.alt ?? ''}
                className="w-[60%] sm:w-[80%] max-h-[80vh]"
                width={200}
                height={200}
              />
            )}
          </div>
        </div>
      </Fade>
    </div>
  )
}
