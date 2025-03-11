import React from 'react'
import { Fade } from 'react-awesome-reveal'

import type { ContentBlock as ContentBlockProps } from '@/payload-types'
import { RichText } from '@payloadcms/richtext-lexical/react'

export const ContentBlock: React.FC<ContentBlockProps> = (props) => {
  const { sections } = props

  return (
    <div>
      <Fade delay={100} fraction={0.5} triggerOnce>
        {sections &&
          sections.length > 0 &&
          sections.map((section, index) => {
            const { heading, sectionContent } = section

            return (
              <div key={index} className="container">
                {!!heading && <h2>{heading}</h2>}
                <RichText className="RichText mt-6 lg:mt-8" data={sectionContent} />
              </div>
            )
          })}
      </Fade>
    </div>
  )
}
