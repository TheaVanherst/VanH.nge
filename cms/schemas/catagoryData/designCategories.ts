
import { defineField, defineType }  from 'sanity'
import { DashboardIcon }            from '@sanity/icons'

const
  designCategories = defineType({
    name: 'designCategory', title: 'Design Tags',
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
    icon: DashboardIcon,
  });

export default designCategories;