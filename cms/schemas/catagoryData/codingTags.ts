
import { defineType }  from 'sanity'
import { CodeBlockIcon }            from '@sanity/icons'
import tagData                      from '../components/fields/tagData';

const
  codingCategories = defineType({
    name: 'programingTags', title: 'Coding Tags',
    type: 'document',
    fields: tagData,
    icon: CodeBlockIcon,
  });

export default codingCategories;