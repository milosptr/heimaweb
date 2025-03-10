import { StoreCardsBlock as SCB } from '@/payload-types'
import clsx from 'clsx'
import Image from 'next/image'
import { Fade } from 'react-awesome-reveal'

export const StoreCardsBlock: React.FC<SCB> = (props) => {
  const { heading, media, imagePosition, imageWidth } = props
  const image = media as { url: string; alt: string }

  return (
    <div className="container">
      <Fade delay={300} fraction={0.5} triggerOnce>
        <div className="flex flex-col justify-center h-screen gap-6 sm:gap-8">
          {!!heading && (
            <div className={clsx('flex w-full', imagePosition)}>
              <h2>{heading}</h2>
            </div>
          )}
          <div className={clsx('flex', imagePosition, imageWidth)}>
            <Image
              src={image.url}
              alt={image.alt}
              width={350}
              height={350}
              className="w-full h-full"
            />
          </div>
        </div>
      </Fade>
    </div>
  )
}
