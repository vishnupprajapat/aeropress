
import { defineField, defineType, defineArrayMember } from 'sanity'
import { MenuIcon } from '@sanity/icons'

export default defineType({
  name: 'home',
  title: 'Home',
  type: 'document',
  icon: MenuIcon,
  fields: [
    defineField({
      name:"herosection",
      type: 'heroSection',
      title: 'Hero Section',
      description: 'Main hero section of the home page',
      options: {
        collapsed: true,
        collapsible: true,
      },
    }),
    defineField({
      name: 'productSection',
      title: 'Product Section',
      type: 'productSection',
      options: {
        collapsed: true,
        collapsible: true,
      },
    }),
    defineField({
      name: 'howDoWeStackUp',
      title: 'How Do We Stack Up Section',
      type: 'howDoWeStackUp',
      options: {
        collapsed: true,
        collapsible: true,
      },
    }),
    defineField({
        name: 'technologySection',
        title: '3-in-1 Technology Section',
        type: 'technologySection',
        options: {
          collapsed: true,
          collapsible: true,
        },
      }),
    defineField({
        name: 'homeCompanyRew',
        title: 'Company Rew Section',
        type: 'homeCompanyRew',
        options: {
          collapsed: true,
          collapsible: true,
        },
    }),
    defineField({
      name: 'homeReviewsImagesSection',
      title: 'Home Reviews Images Section',
      type: 'homeReviewsImagesSection',
      options: {
        collapsed: true,
        collapsible: true,
      },
    }),
    defineField({
        name: 'testimonialSection',
        title: 'Testimonial Section',
        type: 'testimonialSection',
        options: {
            collapsed: true,
            collapsible: true,
        },
    }),
    defineField({
      name: 'blogRecipe',
      title: 'Blog Recipe Section',
      type: 'blogRecipe',
      options: {
        collapsed: true,
        collapsible: true,
      },
    }),

  ],
    preview: {
      prepare() {
        return {
          media: MenuIcon,
          subtitle: 'Home',
          title: 'Home',
        }
      },
    },
})
