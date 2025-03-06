import { PremiumBoxBlock as PBBProps } from '@/payload-types'
import Image from 'next/image'
import { Fade } from 'react-awesome-reveal'

export const PremiumBoxBlock = (props: PBBProps) => {
  const { sections } = props
  const hasSections = sections && Array.isArray(sections) && sections.length > 0

  return (
    <div className="container py-10 text-lg">
      <Fade delay={300} triggerOnce>
        <div className="lg:max-w-[700px]">
          <div className="grid grid-cols-5 pb-1 mb-2 border-b border-solid border-gray-300">
            <div className="col-span-3">Service / Feature</div>
            <div className="flex justify-center">Free</div>
            <div className="flex justify-center">Premium</div>
          </div>
          {hasSections &&
            sections.map((s, idx) => (
              <div key={idx} className="grid grid-cols-5 mb-2">
                <div className="col-span-3 font-bold">{s.title}</div>
                <div className="flex justify-center">
                  {s.freeFeature ? (
                    <Image src="/icons/check.svg" alt="Included" width={28} height={28} />
                  ) : (
                    <Image src="/icons/close.svg" alt="Not Included" width={28} height={28} />
                  )}
                </div>
                <div className="flex justify-center">
                  {s.premiumFeature ? (
                    <Image src="/icons/check.svg" alt="Included" width={28} height={28} />
                  ) : (
                    <Image src="/icons/close.svg" alt="Not Included" width={28} height={28} />
                  )}
                </div>
              </div>
            ))}
        </div>
      </Fade>
    </div>
  )
}
