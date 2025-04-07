import {defineType, defineField, defineArrayMember} from 'sanity'

export default defineType({
  name: 'homeCompanyRew',
  title: 'Company Rew Section',
  type: 'array',
  of: [
    defineArrayMember({
      type: 'object',
      fields: [
        defineField({
          name: 'image',
          title: 'Image',
          type: 'image',
          options: {hotspot: true},
        }),
        defineField({
          name: 'title',
          title: 'Title',
          type: 'string',
        }),
      ],
    }),
  ],
})
