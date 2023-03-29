
import { defineType }  from 'sanity'
import { CommentIcon }          from '@sanity/icons'
import tagData from '../components/fields/tagData';

const
  internalTags = defineType({
    name: 'internalTags', title: 'Internal Tags',
    type: 'document',
    fields: tagData,
    icon: CommentIcon,
  });

export default internalTags;