
import { defineType }       from 'sanity'
import { PresentationIcon } from '@sanity/icons'

const
  jobDescription = defineType({
    name: 'role',
    title: 'Job Description',
    type: 'document',
    fields: [{
     name: 'title',
     title: 'Title',
     type: 'string',
    },{
     name: 'description',
     title: 'Description',
     type: 'text',
    }],
    icon: PresentationIcon,
  });

export default jobDescription