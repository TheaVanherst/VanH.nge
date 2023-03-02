
import { defineField, defineType }  from 'sanity'
import { UserIcon }                 from '@sanity/icons'

export default defineType({
  name: 'author',
  title: 'Author',
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

  icon: UserIcon,
  preview: {
    select: {
      title: 'fullName',
      subtitle: 'bio',
      media: 'userPortrait',
    },
  },
})
