import type { Metadata } from 'next'
import { getServerSideURL } from './getURL'
import { descriptionMetadata, titleMetadata } from './metadata'

const defaultOpenGraph: Metadata['openGraph'] = {
  type: 'website',
  description: descriptionMetadata,
  images: [
    {
      url: `${getServerSideURL()}/website-template-OG.webp`,
    },
  ],
  siteName: titleMetadata,
  title: titleMetadata,
}

export const mergeOpenGraph = (og?: Metadata['openGraph']): Metadata['openGraph'] => {
  return {
    ...defaultOpenGraph,
    ...og,
    images: og?.images ? og.images : defaultOpenGraph.images,
  }
}
