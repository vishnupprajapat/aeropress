import { defineField, defineType, defineArrayMember } from 'sanity'

export default defineType({
  name: 'howDoWeStackUp',
  title: 'How Do We Stack Up Section',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Section Title',
      type: 'string',
    }),
    defineField({
      name: 'filters',
      title: 'Brew Method Filters',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'string',
        }),
      ],
      description: 'Example: French Press, Pour Over, Moka Pot, Drip',
    }),
    defineField({
      name: 'stepsTitle',
      title: 'Steps Title',
      type: 'string',
    }),
    defineField({
      name: 'steps',
      title: 'Brew & Clean Steps',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          name: 'step',
          fields: [
            {
              name: 'image',
              title: 'Step Image',
              type: 'image',
              options: { hotspot: true },
            },
            {
              name: 'title',
              title: 'Step Title (e.g. 01 – Pour)',
              type: 'string',
            },
            {
              name: 'description',
              title: 'Step Description',
              type: 'text',
            },
          ],
        }),
      ],
    }),
  ],
})
