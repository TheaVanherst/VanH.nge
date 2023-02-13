
import { slugUniqueCheck } from './components/slugCheck'

export default {
  name: 'post',
  title: 'Post',
  type: 'document',
  fields: [{
    name: 'title',
    title: 'Title',
    type: 'string',
    validation: Rule => Rule.required().min(12).max(64)
  },{
    name: 'slug',
    title: 'Slug',
    type: 'slug',
    validation: Rule => Rule.required(),
    options: {
      source: 'title',
      maxLength: 96,
      isUnique: slugUniqueCheck
    }
  },{
    name: 'categories',
    title: 'Categories',
    type: 'array',
    of: [{
      type: 'reference',
      to: {
        type: 'category'
      }
    }]
  },{
    name: 'mainImage',
    title: 'Main image',
    type: 'image',
    options: {
      hotspot: true,
    }
  },{
    name: 'publishedAt',
    title: 'Published at',
    type: 'datetime',
  },{
    name: 'author',
    title: 'Author',
    type: 'reference',
    validation: Rule => Rule.required(),
    to: {
      type: 'author'
    }
  },{
    name: 'editor',
    title: 'Editor',
    type: 'reference',
    to: {
      type: 'author'
    }
  },{
    name: 'briefDesc',
    title: 'Brief Description',
    type: 'string',
    validation: Rule => Rule.required().min(24).max(160)
  },{
    name: 'body',
    title: 'Body',
    type: 'blockContent',
    validation: Rule => Rule.required()
  },{
    name: 'editorNotes',
    title: 'Editor Notes',
    type: 'string',
    validation: Rule => Rule.min(10).max(160)
  }],

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
    }
  }
}
