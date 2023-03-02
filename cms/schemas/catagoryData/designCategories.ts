
import { defineField, defineType }  from 'sanity'
import { MasterDetailIcon }                from '@sanity/icons'

const
  designCategories = defineType({
    name: 'designCategory',
    title: 'Design Tags',
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
    icon: MasterDetailIcon,
  });

export default designCategories;