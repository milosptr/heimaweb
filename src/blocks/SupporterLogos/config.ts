import type { Block } from 'payload'

export const SupporterLogos: Block = {
  slug: 'supporterLogos',
  interfaceName: 'SupporterLogosBlock',
  fields: [
    {
      type: 'text',
      name: 'heading',
    },
    {
      type: 'array',
      name: 'supporters',
      fields: [
        {
          type: 'upload',
          name: 'logo',
          required: true,
          relationTo: 'media',
        },
      ],
    },
  ],
}
