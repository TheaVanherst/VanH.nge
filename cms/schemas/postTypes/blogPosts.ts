
import { defineField, defineType }  from 'sanity'
import { slugUniqueCheck }          from '../components/slugCheck'
import { BlockContentIcon }         from '@sanity/icons'

import { publishDateAsc, publishDateDesc }  from '../libs/sortOrder'

const
  blogpost = defineType({
    name: 'blogPost',
    title: 'Blog Post',
    type: 'document',
    fields: [
      defineField({
        name: 'title',
        title: 'Title',
        type: 'string',
        validation: Rule => Rule.required().min(12).max(64)
      }),
      defineField({
        name: 'slug', title: 'Slug',
        type: 'slug',
        validation: Rule => Rule.required(),
        options: {
          source: 'title',
          maxLength: 32,
          isUnique: slugUniqueCheck
        }
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
        ]
      }),

      defineField({
        name: 'internalTags', title: 'internal Tags',
        type: 'reference',
        to: {
          type: 'internalTags'
        },
      }),

      defineField({
        name: 'mainImage', title: 'Main image',
        type: 'image',
        options: {
          hotspot: true,
        }
      }),
      defineField({
        name: 'publishedAt', title: 'Published at',
        type: 'datetime',
        validation: Rule => Rule.required(),
        initialValue: (new Date()).toISOString()
      }),
      defineField({
        name: 'author', title: 'Author',
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
        validation: Rule => Rule.required().min(12).max(160)
      }),
      defineField({
        name: 'body',
        title: 'Body',
        type: 'blockContent',
        validation: Rule => Rule.required()
      }),
      defineField({
        name: 'editorNotes',
        title: 'Editor Notes',
        type: 'string',
        validation: Rule => Rule.min(12).max(160)
      }),
    ],

    orderings: [
      publishDateAsc,
      publishDateDesc
    ],

    icon: BlockContentIcon,
    preview: {
      select: {
        title: 'title',
        subtitle: 'briefDesc',
        author: 'authors.fullName',
        media: 'mainImage',
      },
      prepare(selection) {
        const {author, title, media} = selection
        return {
          title: title,
          subtitle: `${author} ${title}`,
          media: media
        }
      }
    }
  });

export default blogpost