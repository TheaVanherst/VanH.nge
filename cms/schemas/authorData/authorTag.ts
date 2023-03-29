
import { defineType } from 'sanity'
import { TagIcon }    from '@sanity/icons'
import tagData        from '../components/fields/tagData';

const
  artCategories = defineType({
    name: 'authorTags', title: 'Author Tags',
    type: 'document',
    fields: tagData,
    icon: TagIcon,
  });

export default artCategories;