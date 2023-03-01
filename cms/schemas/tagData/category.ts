
import { defineField, defineType }  from 'sanity'
import { UlistIcon }                from '@sanity/icons'

const
  category = defineType({
    name: 'category',
    title: 'Category',
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
    icon: UlistIcon,
  });

export default category;