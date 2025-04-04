import groq from 'groq'

 import { createGroqBuilder, z } from 'groqd';
 import { IMAGE_FRAGMENT, MENU_FRAGMENT } from './fragments';
 import type * as SanityTypes from "./types.ts";

 const q = createGroqBuilder<{
  schemaTypes: SanityTypes.AllSanitySchemaTypes
  referenceSymbol: typeof SanityTypes.internalGroqTypeReferenceTo;
}>();

export const POSTS_QUERY = groq`*[_type == "post" && defined(slug.current)] | order(publishedAt desc)`
export const POST_QUERY = groq`*[_type == "post" && slug.current == $slug][0]`



export const HEADER_QUERY = q('*')
  .filter(`(_type == "header"`)
  .grab({
    logo: q('headerlogo').grab(IMAGE_FRAGMENT).nullable(),
    menu: MENU_FRAGMENT.nullable(),
  })
  .slice(0)
  .nullable();