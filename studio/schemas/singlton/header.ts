import {InsertBelowIcon} from '@sanity/icons'
import {defineField} from 'sanity'

const TITLE = 'Header'

export default defineField({
  name: 'header',
  title: TITLE,
  type: 'document',
  icon: InsertBelowIcon,
  fields: [
    defineField({
      name: 'headerlogo',
      title: 'Header Logo',
      type: 'image',
      options: {
        collapsed: false,
        collapsible: true,
      },
    }),
    defineField({
      name: 'menu',
      type: 'headerNavigation',
    }),
  ],
  preview: {
    prepare() {
      return {
        media: InsertBelowIcon,
        subtitle: 'Header',
        title: TITLE,
      }
    },
  },
})
