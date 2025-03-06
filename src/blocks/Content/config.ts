import type { Block, Field } from 'payload'

const block: Field[] = [
  {
    name: 'heading',
    type: 'text',
  },
  {
    name: 'sectionContent',
    type: 'richText',
    required: true,
  },
]

export const Content: Block = {
  slug: 'content',
  interfaceName: 'ContentBlock',
  fields: [
    {
      name: 'sections',
      type: 'array',
      admin: {
        initCollapsed: true,
      },
      fields: block,
    },
  ],
}
