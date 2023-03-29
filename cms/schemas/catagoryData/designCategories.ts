
import { defineType }  from 'sanity'
import { DashboardIcon }            from '@sanity/icons'
import tagData                      from '../components/fields/tagData';

const
  designCategories = defineType({
    name: 'designCategory', title: 'Design Tags',
    type: 'document',
    fields: tagData,
    icon: DashboardIcon,
  });

export default designCategories;