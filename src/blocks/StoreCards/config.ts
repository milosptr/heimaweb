import type { Block } from 'payload'

export const StoreCards: Block = {
  slug: 'storeCards',
  interfaceName: 'StoreCardsBlock',
  fields: [
    {
      type: 'text',
      name: 'heading',
    },
    {
      type: 'upload',
      name: 'media',
      required: true,
      relationTo: 'media',
    },
    {
      type: 'row',
      fields: [
        {
          type: 'select',
          name: 'imageWidth',
          options: [
            {
              label: 'Full Width',
              value: 'w-full',
            },
            {
              label: 'Half Width',
              value: 'w-1/2',
            },
            {
              label: 'Third Width',
              value: 'w-1/3',
            },
            {
              label: 'Quarter Width',
              value: 'w-1/4',
            },
          ],
          admin: {
            width: '50%',
          },
        },
        {
          type: 'select',
          name: 'imagePosition',
          options: [
            {
              label: 'Left',
              value: 'flex-start',
            },
            {
              label: 'Center',
              value: 'justify-center',
            },
            {
              label: 'Right',
              value: 'flex-end',
            },
          ],
          admin: {
            width: '50%',
          },
        },
      ],
    },
  ],
}
