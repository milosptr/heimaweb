import React from 'react'

import { IFrameBlock as IFBProps } from '@/payload-types'

export const IFrameBlock: React.FC<IFBProps> = (props) => {
  const { title, link } = props

  return (
    <div className="container">
      {!!title && <h1 className="mb-8">{title}</h1>}
      <iframe
        src={link}
        width="100%"
        allow="fullscreen"
        height={'100%'}
        className="h-[80vh] lg:h-[50vh] border border-solid border-foreground rounded-md"
      />
    </div>
  )
}
