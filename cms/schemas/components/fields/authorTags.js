
import {defineField} from 'sanity'

const authorTagData = [
  defineField({
    name: 'emoji', title: 'emoji',
    type: 'string',
  }),
  defineField({
    name: 'alt', title: 'Alt Text',
      type: 'string',
  }),
  defineField({
    name: 'description', title: 'Description',
    description: 'this will only be shown when filtered',
    type: 'text',
  })
];

export default authorTagData