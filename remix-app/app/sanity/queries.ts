import groq from 'groq'

//  import { createGroqBuilder, z } from 'groqd';
//  import { IMAGE_FRAGMENT, MENU_FRAGMENT } from './fragments';
//  import type * as SanityTypes from "./types.ts";

//  const q = createGroqBuilder<{
//   schemaTypes: SanityTypes.AllSanitySchemaTypes
//   referenceSymbol:  
// }>();

export const POSTS_QUERY = groq`*[_type == "post" && defined(slug.current)] | order(publishedAt desc)`
export const POST_QUERY = groq`*[_type == "post" && slug.current == $slug][0]`




export const HEADER_QUERY= groq`*[_type == "header"][0]{
  _id,
  headerlogo{
    asset->{
      _id,
      url,
      metadata {
        lqip,
        dimensions {
          width,
          height
        }
      }
    },
    alt
  },
  menu[]{
    _type == "externalLink" => {
      _type,
      name,
      link,
      openInNewTab
    },
    _type == "nestedNavigation" => {
      _type,
      name,
      childLinks[]{
        _type == "internalLink" => {
          _type,
          name,
          anchor
        },
        _type == "externalLink" => {
          _type,
          name,
          link,
          openInNewTab
        }
      }
    }
  }
}
`
export const FOOTER_QUERY = groq`
*[_type == "footer"][0]{
  promoHeading,
  footerLogo,
  promoTextHeading,
  promoTextDescription,
  footerNav[]{
    title,
    links[]{
      label,
      url
    }
  },
  socialLinks[]{
    platform,
    url
  },
  copyright,
  legalLinks[]{
    label,
    url
  }
}
`

export const HERO_BANNER_QUERY = groq`
*[_type == "home"][0]{
  herosection {
    backgroundImage {
      asset -> {
        _id,
        url,
        metadata {
          lqip,
          dimensions {
            width,
            height
          }
        }
      }
    },
    badge,
    heading,
    features,
    ctaText,
    ctaUrl
  }
}
`
export const PRODUCT_SECTION_QUERY = groq`
*[_type == "home"][0] {
  productSection {
    title,
    compareText,
    products[] {
      title,
      subtitle,
      price,
      ctaText,
      image {
        asset -> {
          url
        }
      },
      hoverImage {
        asset -> {
          url
        }
      },
      variantImages[] {
        asset -> {
          url
        }
      }
    }
  }
}
`


export const HOW_DO_WE_STACK_UP_QUERY = groq`
*[_type == "home"][0] {
  howDoWeStackUp {
    title,
    filters,
    stepsTitle,
    steps[] {
      title,
      description,
      image {
        asset -> {
          url
        }
      }
    }
  }
}
`

export const THREE_IN_ONE_TECH_QUERY = groq`
*[_type == "home"][0] {
  technologySection {
    title,
    description,
    ctaText,
    ctaLink,
    image {
      asset -> {
        url
      }
    },
    features[] {
      label,
      icon {
        asset -> {
          url
        }
      }
    }
  }
}
`
export const HOME_COMPANY_REW_QUERY = groq`
*[_type == "home"][0] {
  homeCompanyRew[] {
    title,
    image {
      asset -> {
        url,
        metadata {
          lqip,
          dimensions {
            width,
            height
          }
        }
      }
    }
  }
}
`
export const  HOME_REVIEWS_IMAGES_SECTION = groq`
*[_type == "home"][0] {
  homeReviewsImagesSection {
    tagline,
    title,
    ctaText,
    ctaLink,
    products[] {
      title,
      image {
        asset -> {
          url
        }
      }
    }
  }
}
`
export const TESTIMONIALS_QUERY = groq`
*[_type == "home"][0] {
  testimonialSection {
    headline,
    rating,
    testimonials[] {
      quote,
      author
    }
  }
}
`
export const RECIPES_QUERY = groq`
*[_type == "home"][0] {
  blogRecipe {
    title,
    filters,
    recipes[] {
      title,
      ctaText,
      ctaLink,
      description,
      rating,
      reviews,
      category,
      "imageUrl": image.asset->url
    }
  }
}
`
