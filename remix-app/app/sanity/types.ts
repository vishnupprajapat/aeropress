import type {PortableTextBlock} from '@portabletext/types'
import type {ImageAsset, Slug} from '@sanity/types'

export interface Post {
  _type: 'post'
  _id: string
  _createdAt: string
  title?: string
  slug: Slug
  excerpt?: string
  mainImage?: ImageAsset
  body: PortableTextBlock[]
}

export interface Header {
  _type: 'header'
  _id: string
  headerlogo?: ImageAsset
  menu?: {
    _type: 'headerNavigation'
    items: Array<{
      _type: 'headerNavigationItem'
      title: string
      link?: {
        _type: 'linkInternal'
        reference: {
          _type: 'reference'
          slug: Slug
          _ref: string
        }
      }
      anchor?: string
    }>
  }
}

export type AllSanitySchemaTypes ={Post: Post; Header: Header;}