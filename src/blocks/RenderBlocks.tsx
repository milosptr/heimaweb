import React, { Fragment } from 'react'

import type { Page } from '@/payload-types'

import { HomeContentBlock } from '@/blocks/ContentHomepage/Component'
import { ContentBlock } from '@/blocks/Content/Component'
import { StoreButtonsBlock } from './StoreButtons/Component'
import { MarkdownBlock } from './Markdown/Component'
import { IFrameBlock } from './iFrame/Component'
import { PremiumBoxBlock } from './PremiumBox/Component'
import { StoreCardsBlock } from './StoreCards/Component'
import { SupporterLogosBlock } from './SupporterLogos/Component'
import { FormBlock } from '@/blocks/Form/Component'

const blockComponents = {
  content: ContentBlock,
  markdown: MarkdownBlock,
  contentHomepage: HomeContentBlock,
  iframe: IFrameBlock,
  storeButtons: StoreButtonsBlock,
  premiumBox: PremiumBoxBlock,
  storeCards: StoreCardsBlock,
  supporterLogos: SupporterLogosBlock,
  formBlock: FormBlock,
}

export const RenderBlocks: React.FC<{
  blocks: Page['layout'][0][]
}> = (props) => {
  const { blocks } = props

  const hasBlocks = blocks && Array.isArray(blocks) && blocks.length > 0

  if (hasBlocks) {
    return (
      <Fragment>
        {blocks.map((block, index) => {
          const { blockType } = block

          if (blockType && blockType in blockComponents) {
            const Block = blockComponents[blockType]

            if (Block) {
              return (
                <Fragment key={index}>
                  {/* @ts-expect-error there may be some mismatch between the expected types here */}
                  <Block {...block} disableInnerContainer />
                </Fragment>
              )
            }
          }
          return null
        })}
      </Fragment>
    )
  }

  return null
}
