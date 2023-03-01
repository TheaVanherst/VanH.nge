
import { defineField, defineType }  from 'sanity'
import { ImageIcon }                from '@sanity/icons'

const
  artPost = defineType({
    name: 'artPost',
    title: 'Art Posts',
    type: 'document',
    fields: [
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

      defineField({
        name: 'gallery', title: 'gallery',
        type: 'blockGallery',
        validation: Rule => Rule.required()
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
        name: 'briefDesc',
        title: 'Brief Description',
        type: 'string',
        validation: Rule => Rule.min(24).max(160)
      }),

      defineField({
        name: 'publishedAt',
        title: 'Published at',
        type: 'datetime',
      }),
    ],

    icon: ImageIcon,
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
  });

export default artPost
