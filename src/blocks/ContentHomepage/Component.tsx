import React from 'react'
import { Fade } from 'react-awesome-reveal'

import type { HomeContentBlock as HomeContentBlockProps, Media } from '@/payload-types'
import Image from 'next/image'

export const HomeContentBlock: React.FC<HomeContentBlockProps> = (props) => {
  const { sections } = props

  return (
    <div className="container">
      <Fade delay={100} fraction={0.5} triggerOnce>
        {sections &&
          sections.length > 0 &&
          sections.map((section, index) => {
            const { heading, desscription, imagePosition, image, sideImage } = section
            const leftPositioned = imagePosition === 'left'
            const contentImage = image as Media
            const sideContentImage = sideImage as Media

            return (
              <div key={index} className="flex flex-col justify-center h-screen">
                <div className={'relative flex flex-col sm:flex-row items-end gap-6 sm:gap-8'}>
                  <div
                    className={`w-full sm:w-1/12 flex justify-center mb-auto ${leftPositioned ? 'order-1 sm:order-1' : 'order-1 sm:order-3'}`}
                  >
                    {!!sideContentImage && (
                      <Image
                        width={200}
                        height={200}
                        src={sideContentImage.url!}
                        alt={sideContentImage.alt ?? ''}
                        className="absolute sm:relative top-10 right-10 sm:top-0 sm:right-0 w-[20%] sm:w-full"
                      />
                    )}
                  </div>
                  <div className={`w-full sm:w-5/12 order-2`}>
                    <Image
                      width={200}
                      height={200}
                      src={contentImage.url!}
                      alt={contentImage?.alt ?? ''}
                      className="w-[60%] sm:w-full max-h-[70vh]"
                    />
                  </div>
                  <div
                    className={`w-full sm:w-1/2 ${leftPositioned ? 'order-3 sm:order-3' : 'order-3 sm:order-1'}`}
                  >
                    <h2>{heading}</h2>
                    <div className="description-text mt-4 lg:mt-6">{desscription}</div>
                  </div>
                </div>
              </div>
            )
          })}
      </Fade>
    </div>
  )
}
