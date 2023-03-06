
import { defineField, defineType }  from 'sanity'
import { CodeBlockIcon }       from '@sanity/icons'

const
  codingCategories = defineType({
    name: 'programingTags', title: 'Coding Tags',
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
    icon: CodeBlockIcon,
  });

export default codingCategories;