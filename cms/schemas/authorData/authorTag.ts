
import { defineField, defineType }  from 'sanity'
import { TagIcon }                from '@sanity/icons'

const
  artCategories = defineType({
    name: 'authorTags', title: 'Author Tags',
    type: 'document',
    fields: [
      defineField({
        name: 'title', title: 'Title',
        type: 'string',
      }),
      defineField({
        name: 'description', title: 'Description',
        description: 'this will only be shown when filtered',
        type: 'text',
      }),
    ],
    icon: TagIcon,
  });

export default artCategories;