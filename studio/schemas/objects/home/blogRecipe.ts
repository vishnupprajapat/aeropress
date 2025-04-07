import {defineType, defineField, defineArrayMember} from 'sanity'

export default defineType({
  name: 'blogRecipe',
  title: 'Recipe Section',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'filters',
      title: 'Filters',
      type: 'array',
      of: [{type: 'string'}],
      description: 'List of filter buttons like Featured, Hot, Cold, Popular',
    }),
    defineField({
      name: 'recipes',
      title: 'Recipes',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            {name: 'title', title: 'Title', type: 'string'},
            {name: 'ctaText', title: 'CTA Text', type: 'string'},
            {name: 'ctaLink', title: 'CTA Link', type: 'url'},
            {name: 'description', title: 'Description', type: 'text'},
            {
              name: 'rating',
              title: 'Rating',
              type: 'number',
              validation: (Rule) => Rule.min(0).max(5),
            },
            {
                name: 'reviews',
                title: 'reviews',
                type: 'number',
                validation: (Rule) => Rule.min(0).max(5),
              },
            {name: 'image', title: 'Image', type: 'image', options: {hotspot: true}},
            {name: 'category', title: 'Category', type: 'string'}, // hot, cold, featured, etc.
          ],
        }),
      ],
    }),
  ],
})
