
import { defineField, defineType } from 'sanity'
import galleryContentBlock from '../components/blocks/galleryContentBlock'

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

    galleryContentBlock,

    defineField({
      name: 'briefDesc',
      title: 'Brief Description',
      type: 'string',
      validation: Rule => Rule.min(24).max(160)
    }),
  ],

  preview: {
    select: {
      title: 'briefDesc',
      media: 'gallery.images[0]',
    },
    prepare(selection) {
      const {title, media} = selection
      return {
        title: title,
        media: media
      }
    }
  }
})
