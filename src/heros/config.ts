import { StoreButtons } from '@/blocks/StoreButtons/config'
import type { Field } from 'payload'

export const hero: Field = {
  name: 'hero',
  type: 'group',
  fields: [
    {
      name: 'heading',
      type: 'text',
    },
    {
      name: 'description',
      type: 'textarea',
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'StoreButtons',
      type: 'blocks',
      blocks: [StoreButtons],
      maxRows: 1,
    },
  ],
  label: false,
}
