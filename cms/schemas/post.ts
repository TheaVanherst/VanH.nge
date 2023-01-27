import { defineField, defineType } from 'sanity'
import { slugUniqueCheck } from './libs/components/slugCheck'

export default defineType({
  name: 'post',
  title: 'Post',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
        isUnique: slugUniqueCheck,
      },}),
    defineField({
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{type: 'reference', to: {type: 'category'}}],
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
      to: {type: 'author'},
    }),
    defineField({
      name: 'editedAt',
      title: 'Edited at',
      type: 'datetime',
    }),
    defineField({
      name: 'editor',
      title: 'Editor',
      type: 'reference',
      to: {type: 'author'},
    }),

    // TODO: Post Content
    defineField({
      name: 'briefDesc',
      title: 'Brief Description',
      type: 'string',
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'blockContent',
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
      }},
  },
})
