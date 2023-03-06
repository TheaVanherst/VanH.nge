
import { defineField, defineType }  from 'sanity'
import { StarIcon }                from '@sanity/icons'

const
  highlightTags = defineType({
    name: 'category', title: 'Highlight Tags',
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
    icon: StarIcon,
  });

export default highlightTags;