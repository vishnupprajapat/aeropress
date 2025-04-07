import { defineType, defineField, defineArrayMember } from 'sanity'

export default defineType({
  name: 'homeReviewsImagesSection',
  title: 'Home Reviews Images Section',
  type: 'object',
  fields: [
    defineField({
      name: 'tagline',
      title: 'Tagline (e.g. @aeropress)',
      type: 'string',
    }),
    defineField({
      name: 'title',
      title: 'Section Title',
      type: 'string',
    }),
    defineField({
      name: 'products',
      title: 'Featured Products',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            {
              name: 'title',
              title: 'Product Title',
              type: 'string',
            },
            {
              name: 'image',
              title: 'Product Image',
              type: 'image',
              options: { hotspot: true },
            },
          ],
        }),
      ],
    }),
    defineField({
      name: 'ctaText',
      title: 'CTA Text',
      type: 'string',
    }),
    defineField({
      name: 'ctaLink',
      title: 'CTA Link URL',
      type: 'url',
    }),
  ],
})
