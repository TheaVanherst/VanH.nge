
import { defineField, defineType }  from 'sanity'
import { ImagesIcon }                from '@sanity/icons'

import { publishDateAsc, publishDateDesc } from '../libs/sortOrder';

const
  artPosts = defineType({
    name: 'artPost', title: 'Art Posts',
    type: 'document',
    fields: [
      defineField({
        name: 'author', title: 'Authors',
        validation: Rule => Rule.required(),
        type: 'reference',
        to: {
          type: 'author'
        }
      }),

      defineField({
        name: 'gallery', title: 'gallery',
        type: 'blockGallery',
        validation: Rule => Rule.required()
      }),

      defineField({
        name: 'categories', title: 'Categories',
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
        name: 'desc', title: 'Brief Description',
        type: 'descContent',
      }),

      defineField({
        name: 'publishedAt', title: 'Published at',
        type: 'datetime',
        validation: Rule => Rule.required(),
        initialValue: (new Date()).toISOString()
      }),
    ],

    orderings: [
      publishDateAsc,
      publishDateDesc
    ],

    icon: ImagesIcon,
    preview: {
      select: {
        title: 'briefDesc',
        title0: 'gallery.images[0]',
        title1: 'gallery.images[1]',
        title2: 'gallery.images[2]',

        media: 'gallery.images[0]',
        author0: 'authors.fullName',
        author1: 'collaborators.0.fullName',
        author2: 'collaborators.1.fullName',
      },
      prepare(selection) {
        const { title, title0, title1, title2,
                author0, author1, author2, media} = selection;

        const authors = [author0, author1, author2].filter(Boolean);
        const subtitle = authors.length > 0 ? `By ${authors.join(', ')}` : '';
        const rTitle = title ? title : (title0?.alt ? title0.alt : (title1?.alt ? title1.alt : title2?.alt ? title2.alt : "Untitled"));

        return {
          title:    rTitle,
          subtitle: subtitle,
          media:    media,
        }
      }
    }
  });

export default artPosts
