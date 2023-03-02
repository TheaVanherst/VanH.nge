
import { defineField, defineType }  from 'sanity'
import { InfoOutlineIcon }                from '@sanity/icons'

const
  genericCategories = defineType({
    name: 'genericCategory',
    title: 'Generic Tags',
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
    icon: InfoOutlineIcon,
  });

export default genericCategories;