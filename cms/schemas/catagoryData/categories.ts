
import { defineField, defineType }  from 'sanity'
import { EditIcon }                from '@sanity/icons'

const
  categories = defineType({
    name: 'category',
    title: 'Highlight Catagories',
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

export default categories;