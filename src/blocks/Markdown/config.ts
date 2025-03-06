import type { Block } from 'payload'

export const Markdown: Block = {
  slug: 'markdown',
  interfaceName: 'MarkdownBlock',
  fields: [
    {
      name: 'sections',
      type: 'array',
      admin: {
        initCollapsed: true,
      },
      fields: [
        {
          name: 'content',
          type: 'textarea',
          required: true,
          maxLength: 50_000,
          admin: {
            description: 'Please paste your markdown content here',
          },
        },
      ],
    },
  ],
}
