import React from 'react'

import type { Media, Page } from '@/payload-types'
import { Fade } from 'react-awesome-reveal'
import { RenderBlocks } from '@/blocks/RenderBlocks'

export const RenderHero: React.FC<Page['hero']> = (props) => {
  const { heading, description, image, StoreButtons } = props || {}
  const heroImage = image as NonNullable<Media>
  const hasImage = heroImage && heroImage.url
  const blocks = StoreButtons ?? []

  if (!heading && !description && !image) {
    return null
  }

  return (
    <div className="container h-screen flex items-center justify-center">
      <Fade triggerOnce delay={500} fraction={0.5}>
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-4">
          <div className="order-2 sm:order-1">
            <h1>{heading}</h1>
            <p className="description-text mt-6 lg:mt-10">{description}</p>
            <div className="relative">
              <RenderBlocks blocks={[...blocks]} />
            </div>
          </div>
          <div className="flex justify-start sm:justify-end order-1 sm:order-2">
            {!!hasImage && (
              <img
                src={heroImage.url!}
                alt={heroImage.alt ?? ''}
                width={'90%'}
                className="w-[60%] sm:w-[90%]"
              />
            )}
          </div>
        </div>
      </Fade>
    </div>
  )
}
