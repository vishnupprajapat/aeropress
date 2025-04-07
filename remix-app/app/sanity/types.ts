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

export type Footer = {
  promoHeading: string
  footerLogo?: SanityImage
  promoTextHeading: string
  promoTextDescription: string
  footerNav: FooterNavColumn[]
  socialLinks: SocialLink[]
  copyright: string
  legalLinks: LegalLink[]
}

export type HeroSectionType = {
  herosection: {
    backgroundImage?: {
      asset?: {
        url: string;
      };
    };
    badge?: string;
    heading?: string;
    features?: string[];
    ctaText?: string;
    ctaUrl?: string;
  };
};


export type FooterNavColumn = {
  title: string
  links: FooterLink[]
}

export type FooterLink = {
  label: string
  url: string
}

export type SocialLink = {
  platform: string
  url: string
}

export type LegalLink = {
  label: string
  url: string
}

// If using Sanity's default image field
export type SanityImage = {
  _type: 'image'
  asset: {
    _ref: string
    _type: 'reference'
  }
}


export type AllSanitySchemaTypes ={Post: Post; Header: Header;}