
import { defineField, defineType }  from 'sanity'
import { UsersIcon }                 from '@sanity/icons'
import {slugUniqueCheck} from '../components/slugCheck'

export default defineType({
  name: 'author',
  title: 'Authors',
  type: 'document',
  fields: [
    // TODO: User Data
    defineField({
      name: 'fullName', title: 'Full Name',
      type: 'string',
    }),
    defineField({
      name: 'handle', title: 'Handle',
      description: "A shorthand onsite username",
      type: 'string',
    }),
    defineField({
      name: 'slug', title: 'Slug',
      type: 'slug',
      validation: Rule => Rule.required(),
      options: {
        source: 'handle',
        maxLength: 16,
        isUnique: slugUniqueCheck
      }
    }),
    defineField({
      name: 'socialMedia', title: 'Social Media Links',
      description: "Note - The social media next to your handle is the first to be featured below",
      type: 'array',
      of: [{
        name: 'social', title: 'Social Media',
        type: 'object',
        validation: Rule => Rule.required(),
        fields: [{
            name: 'platformName',  title: 'Platform Name',
            type: 'string', validation: Rule => Rule.required().min(3).max(20),
          },{
            name: 'url',  title: 'Url',
            type: 'url', validation: Rule => Rule.required().min(4).max(64),
        }]
      }]
    }),
    defineField({
      name: 'userPortrait',
      title: 'User Portrait',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'profileBanner',
      title: 'Profile Banner',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'bio',
      title: 'Bio',
      type: 'blockContent',
    }),
  ],

  icon: UsersIcon,
  preview: {
    select: {
      title: 'fullName',
      subtitle: 'bio',
      media: 'userPortrait',
    },
  },
})
