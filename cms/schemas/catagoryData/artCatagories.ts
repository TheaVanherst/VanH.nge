
import { defineField, defineType }  from 'sanity'
import { ImageIcon }                from '@sanity/icons'

const
  artCategories = defineType({
    name: 'artCategory', title: 'Art Tags',
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
    icon: ImageIcon,
  });

export default artCategories;