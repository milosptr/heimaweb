import type { Block } from 'payload'

export const StoreButtons: Block = {
  slug: 'storeButtons',
  interfaceName: 'StoreButtonsBlock',
  fields: [
    {
      type: 'row',
      fields: [
        {
          name: 'AppleStoreLink',
          type: 'text',
          required: true,
          admin: {
            width: '48%',
            style: {
              marginRight: '4%',
            },
          },
        },
        {
          name: 'AppleStoreImage',
          type: 'upload',
          relationTo: 'media',
          required: true,
          admin: {
            width: '48%',
          },
        },
      ],
    },
    {
      type: 'row',
      fields: [
        {
          name: 'GooglePlayLink',
          type: 'text',
          required: true,
          admin: {
            width: '48%',
            style: {
              marginRight: '4%',
            },
          },
        },
        {
          name: 'GooglePlayImage',
          type: 'upload',
          relationTo: 'media',
          required: true,
          admin: {
            width: '48%',
          },
        },
      ],
    },
  ],
}
