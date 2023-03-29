
import { defineType }  from 'sanity'
import { TagIcon }                  from '@sanity/icons'
import tagData                      from '../components/fields/tagData';

const
  genericCategories = defineType({
    name: 'genericCategory', title: 'Generic Tags',
    type: 'document',
    fields: tagData,
    icon: TagIcon,
  });

export default genericCategories;