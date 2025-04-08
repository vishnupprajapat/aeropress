import { defineField, defineType, defineArrayMember } from 'sanity'
import { ImageIcon } from '@sanity/icons'

export default defineType({
  name: 'heroSection',
  title: 'Hero Section',
  type: 'object',
  icon: ImageIcon,
  fields: [
    defineField({
      name: 'backgroundImage',
      title: 'Background Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'backgroundImageForMobile',
      title: 'Background Image for Mobile',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'badge',
      title: 'Badge Text',
      type: 'string',
      description: 'e.g. ★★★★★ 65,000+ Five Star Reviews',
    }),
    defineField({
      name: 'heading',
      title: 'Main Heading',
      type: 'string',
    }),
    defineField({
      name: 'features',
      title: 'Feature Points',
      type: 'array',
      of: [defineArrayMember({ type: 'string' })],
    }),
    defineField({
      name: 'ctaText',
      title: 'CTA Button Text',
      type: 'string',
    }),
    defineField({
      name: 'ctaUrl',
      title: 'CTA Button URL',
      type: 'url',
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Hero Section',
        subtitle: 'Background Image Hero',
        media: ImageIcon,
      }
    },
  },
})
