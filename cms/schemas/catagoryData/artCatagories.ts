
import { defineField, defineType }  from 'sanity'
import { EditIcon }                from '@sanity/icons'

const
  artCategories = defineType({
    name: 'artCategory',
    title: 'Art Tags',
    type: 'document',
    fields: [
      defineField({
        name: 'title',
        title: 'Title',
        type: 'string',
      }),
      defineField({
        name: 'description',
        title: 'Description',
        type: 'text',
      }),
    ],
    icon: EditIcon,
  });

export default artCategories;