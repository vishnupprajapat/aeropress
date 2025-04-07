import { defineField, defineType, defineArrayMember } from 'sanity'

export default defineType({
  name: 'productSection',
  title: 'Product Section',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Section Title',
      type: 'string',
    }),
    defineField({
      name: 'products',
      title: 'Products',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          name: 'product',
          fields: [
            {
              name: 'image',
              title: 'Main Image',
              type: 'image',
              options: { hotspot: true },
            },
            {
                name: 'hoverImage',
                title: 'Hover Image',
                type: 'image',
                options: { hotspot: true },
              },
            {
              name: 'title',
              title: 'Product Title',
              type: 'string',
            },
            {
              name: 'subtitle',
              title: 'Subtitle',
              type: 'string',
            },
            {
              name: 'price',
              title: 'Price',
              type: 'string',
            },
            {
              name: 'variantImages',
              title: 'Variant Images',
              type: 'array',
              of: [{ type: 'image' }],
            },
            {
              name: 'ctaText',
              title: 'CTA Button Text',
              type: 'string',
            }
          ],
        }),
      ],
    }),
    defineField({
      name: 'compareText',
      title: 'Compare Coffee Makers text',
      type: 'string',
    }),
  ],
})
