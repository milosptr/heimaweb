import type { Block, Field } from 'payload'

const blockHome: Field[] = [
  {
    name: 'heading',
    type: 'text',
    required: true,
  },
  {
    name: 'desscription',
    type: 'textarea',
    required: true,
  },
  {
    name: 'imagePosition',
    type: 'radio',
    defaultValue: 'left',
    options: [
      {
        label: 'Left',
        value: 'left',
      },
      {
        label: 'Right',
        value: 'right',
      },
    ],
  },
  {
    name: 'image',
    type: 'upload',
    relationTo: 'media',
    required: true,
  },
  {
    name: 'sideImage',
    type: 'upload',
    relationTo: 'media',
  },
]

export const ContentHomepage: Block = {
  slug: 'contentHomepage',
  interfaceName: 'HomeContentBlock',
  fields: [
    {
      name: 'sections',
      type: 'array',
      admin: {
        initCollapsed: true,
      },
      fields: blockHome,
    },
  ],
}
