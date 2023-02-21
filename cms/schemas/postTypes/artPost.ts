
import { defineField, defineType } from 'sanity'
import gallery from '../components/blocks/gallery'

export default defineType({
  name: 'artPost',
  title: 'Art Posts',
  type: 'document',
  fields: [
    defineField({
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{
        type: 'reference',
        to: {
          type: 'category'
        }
      }]
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
    }),
    defineField({
      name: 'author',
      title: 'Author',
      type: 'reference',
      validation: Rule => Rule.required(),
      to: {
        type: 'author'
      }
    }),
    defineField({
      name: 'coauthors',
      title: 'Collaborators',
      type: 'array',
      of: [{
        type: 'reference',
        to: {
          type: 'author'
        }
      }]
    }),

    gallery,

    defineField({
      name: 'briefDesc',
      title: 'Brief Description',
      type: 'string',
      validation: Rule => Rule.min(24).max(160)
    }),
  ],

  preview: {
    select: {
      title: 'title',
      subtitle: 'briefDesc',
      media: 'gallery.images[0]',
    },
    prepare(selection) {
      const {title, media, subtitle} = selection
      return {
        title: title,
        subtitle: subtitle,
        media: media
      }
    }
  }
})
