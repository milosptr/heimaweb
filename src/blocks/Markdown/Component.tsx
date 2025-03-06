import React from 'react'
import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

import type { MarkdownBlock as MDBProps } from '@/payload-types'

export const MarkdownBlock: React.FC<MDBProps> = (props) => {
  const { sections } = props

  const hasSections = sections && Array.isArray(sections) && sections.length > 0

  return (
    <div className="container">
      <div className="RichText">
        {hasSections &&
          sections.map((section, idx) => (
            <Markdown key={idx} remarkPlugins={[remarkGfm]}>
              {section.content}
            </Markdown>
          ))}
      </div>
    </div>
  )
}
