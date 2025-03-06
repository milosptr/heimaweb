import type { Block } from 'payload'

export const iFrame: Block = {
  slug: 'iframe',
  interfaceName: 'iFrameBlock',
  fields: [
    {
      name: 'title',
      type: 'text',
      admin: {
        description: 'Please enter the title of the iFrame',
      },
    },
    {
      name: 'link',
      type: 'text',
      required: true,
      admin: {
        description: 'Please paste your iFrame link here',
      },
    },
  ],
}
