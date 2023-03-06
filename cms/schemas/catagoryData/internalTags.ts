
import { defineField, defineType }  from 'sanity'
import { CommentIcon }          from '@sanity/icons'

const
  internalTags = defineType({
    name: 'internalTags', title: 'Internal Tags',
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
    icon: CommentIcon,
  });

export default internalTags;