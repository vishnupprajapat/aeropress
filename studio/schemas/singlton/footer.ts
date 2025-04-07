// schemas/footer.ts
import { defineField, defineType, defineArrayMember } from 'sanity'
import { MenuIcon } from '@sanity/icons'

export default defineType({
  name: 'footer',
  title: 'Footer',
  type: 'document',
  icon: MenuIcon,
  fields: [
    defineField({
      name: 'promoHeading',
      title: 'Promo Heading',
      type: 'string',
    }),
    defineField({
        name: 'footerLogo',
        title: 'Footer Logo',
        type: 'image',
        options: {
          collapsed: false,
          collapsible: true,
        },
      }),
    defineField({
      name: 'promoTextHeading',
      title: 'Promo Text Heading',
      type: 'text',
    }),
    defineField({
        name: 'promoTextDescription',
        title: 'Promo Text description',
        type: 'text',
      }),
    defineField({
      name: 'footerNav',
      title: 'Footer Navigation',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          name: 'navColumn',
          title: 'Navigation Column',
          fields: [
            defineField({
              name: 'title',
              type: 'string',
            }),
            defineField({
              name: 'links',
              type: 'array',
              of: [
                defineArrayMember({
                  type: 'object',
                  name: 'footerLink',
                  fields: [
                    defineField({ name: 'label', type: 'string' }),
                    defineField({ name: 'url', type: 'url' }),
                  ],
                }),
              ],
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: 'socialLinks',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          name: 'socialLink',
          fields: [
            defineField({ name: 'platform', type: 'string' }),
            defineField({ name: 'url', type: 'url' }),
          ],
        }),
      ],
    }),
    defineField({
      name: 'copyright',
      type: 'string',
    }),
    defineField({
      name: 'legalLinks',
      title: 'Legal Links',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          name: 'legalLink',
          fields: [
            defineField({ name: 'label', type: 'string' }),
            defineField({ name: 'url', type: 'url' }),
          ],
        }),
      ],
    }),
  ],
    preview: {
      prepare() {
        return {
          media: MenuIcon,
          subtitle: 'Footer',
          title: 'Footer',
        }
      },
    },
})
