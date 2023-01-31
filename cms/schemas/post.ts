
import { defineField, defineType } from 'sanity'
import { slugUniqueCheck } from './components/slugCheck'

export default defineType({
  name: 'post',
  title: 'Post',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required().min(12).max(64),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      validation: Rule => Rule.required().min(6).max(32),
      options: {
        source: 'title',
        maxLength: 96,
        isUnique: slugUniqueCheck,
      },}),
    defineField({
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{
        type: 'reference',
        to: {
          type: 'category'
        }
      }],
    }),

    // TODO: Header Image
    defineField({
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),

    // TODO: Author / Editor Data
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
      },
    }),
    defineField({
      name: 'editor',
      title: 'Editor',
      type: 'reference',
      to: {
        type: 'author'
      },
    }),

    // TODO: Post Content
    defineField({
      name: 'briefDesc',
      title: 'Brief Description',
      type: 'string',
      validation: Rule => Rule.required().min(24).max(160),
    }),

    defineField({
      name: 'body',
      title: 'Body',
      type: 'blockContent',
      validation: Rule => Rule.required(),
    }),

    defineField({
      name: 'editorNotes',
      title: 'Editor Notes',
      type: 'string',
      validation: Rule => Rule.min(10).max(160),
    }),
  ],

  // TODO: Preview Render
  preview: {
    select: {
      title: 'title',
      subtitle: 'briefDesc',
      author: 'author.fullName',
      media: 'mainImage',
    },
    prepare(selection) {
      const {author, title, media} = selection
      return {
        title: title,
        subtitle: `${author} ${title}`,
        media: media
      }
      },
  },
})
