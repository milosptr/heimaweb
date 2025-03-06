import type { Block, Field } from 'payload'

const block: Field[] = [
  {
    name: 'icon',
    type: 'upload',
    relationTo: 'media',
  },
  {
    name: 'title',
    type: 'text',
    required: true,
  },
  {
    name: 'freeFeature',
    type: 'checkbox',
  },
  {
    name: 'premiumFeature',
    type: 'checkbox',
  },
]

export const PremiumBox: Block = {
  slug: 'premiumBox',
  interfaceName: 'PremiumBoxBlock',
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
