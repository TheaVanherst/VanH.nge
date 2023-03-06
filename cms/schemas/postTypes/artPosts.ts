
import { defineField, defineType }  from 'sanity'
import { ImagesIcon }                from '@sanity/icons'

const
  artPosts = defineType({
    name: 'artPost',
    title: 'Art Posts',
    type: 'document',
    fields: [
      defineField({
        name: 'author',
        title: 'Authors',
        validation: Rule => Rule.required(),
        type: 'reference',
        to: {
          type: 'author'
        }
      }),
      defineField({
        name: 'collaborators',
        title: 'Collaborators',
        type: 'array',
        of: [{
          type: 'reference',
          validation: Rule => Rule.required(),
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
        of: [
          { type: 'reference',
            validation: Rule => Rule.required(),
            to: {type: 'category'}},
          { name: 'genericCategory', type: 'reference',
            validation: Rule => Rule.required(),
            to: {type: 'genericCategory'}},
          { name: 'artCategory', type: 'reference',
            validation: Rule => Rule.required(),
            to: {type: 'artCategory'}},
          { name: 'designCategory', type: 'reference',
            validation: Rule => Rule.required(),
            to: {type: 'designCategory'}},
        ],
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

    icon: ImagesIcon,
    preview: {
      select: {
        title: 'briefDesc',
        media: 'gallery.images[0]',
        author0: 'author.fullName',
        author1: 'collaborators.0.fullName',
        author2: 'collaborators.1.fullName',
      },
      prepare(selection) {
        const {title, author0, author1, author2, media} = selection;

        const authors = [author0, author1, author2].filter(Boolean);
        const subtitle = authors.length > 0 ? `By ${authors.join(', ')}` : '';

        return {
          title:    title,
          subtitle: subtitle,
          media:    media,
        }
      }
    }
  });

export default artPosts
