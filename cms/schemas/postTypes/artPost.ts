
import { defineField, defineType } from 'sanity'
import { slugUniqueCheck } from '../components/slugCheck'

import gallery from '../components/blocks/gallery'

export default defineType({
  name: 'artPost',
  title: 'Art Posts',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required().min(12).max(64)
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      validation: Rule => Rule.required(),
      options: {
        source: 'title',
        maxLength: 96,
        isUnique: slugUniqueCheck
      }
    }),
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
      name: 'editor',
      title: 'Editor',
      type: 'reference',
      to: {
        type: 'author'
      }
    }),
    defineField({
      name: 'briefDesc',
      title: 'Brief Description',
      type: 'string',
      validation: Rule => Rule.required().min(24).max(160)
    }),

    gallery,

    defineField({
      name: 'editorNotes',
      title: 'Editor Notes',
      type: 'string',
      validation: Rule => Rule.min(10).max(160)
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
