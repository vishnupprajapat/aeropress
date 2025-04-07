import { defineType, defineField, defineArrayMember } from 'sanity'

export default defineType({
  name: 'technologySection',
  title: '3-in-1 Technology Section',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Section Title',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Section Description',
      type: 'text',
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
    defineField({
      name: 'image',
      title: 'Main Image',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'features',
      title: 'Image Callouts / Features',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            {
              name: 'label',
              title: 'Feature Label',
              type: 'string',
            },
            {
              name: 'icon',
              title: 'Feature Icon (Optional)',
              type: 'image',
              options: { hotspot: true },
            },
          ],
        }),
      ],
    }),
  ],
})
