
import { defineType }  from 'sanity'
import { ImageIcon }                from '@sanity/icons'
import tagData                      from '../components/fields/tagData';

const
  artCategories = defineType({
    name: 'artCategory', title: 'Art Tags',
    type: 'document',
    fields: tagData,
    icon: ImageIcon,
  });

export default artCategories;