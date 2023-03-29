
import { defineType }  from 'sanity'
import { StarIcon }                 from '@sanity/icons'
import tagData                      from '../components/fields/tagData';

const
  highlightTags = defineType({
    name: 'category', title: 'Highlight Tags',
    type: 'document',
    fields: tagData,
    icon: StarIcon,
  });

export default highlightTags;