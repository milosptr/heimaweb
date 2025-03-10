import type { SupporterLogosBlock as SLB } from '@/payload-types'
import Image from 'next/image'
import { Fade } from 'react-awesome-reveal'

export const SupporterLogosBlock: React.FC<SLB> = (props) => {
  const { heading, supporters } = props

  return (
    <div className="container">
      <Fade delay={300} fraction={0.5} triggerOnce>
        <div className="flex flex-col justify-center items-center h-screen gap-6 sm:gap-8">
          {!!heading && <h2>{heading}</h2>}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 justify-center items-center">
            {supporters?.map((supporter, index) => {
              const logo = supporter.logo as { url: string; alt: string }

              return (
                <Image
                  key={index}
                  src={logo.url}
                  alt={logo.alt ?? ''}
                  width={250}
                  height={250}
                  className="w-2/5 sm:w-3/5 object-contain mx-auto"
                />
              )
            })}
          </div>
        </div>
      </Fade>
    </div>
  )
}
