import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'author',
  title: 'Author',
  type: 'document',
  fields: [
    // TODO: User Data
    defineField({
      name: 'fullName',
      title: 'Full Name',
      type: 'string',
    }),
    defineField({
      name: 'handle',
      title: 'Handle',
      type: 'string',
    }),
    defineField({
      name: 'twitterURL',
      title: 'Twitter URL',
      type: 'string',
    }),

    // TODO: Profile Data
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

    // TODO: About
    defineField({
      name: 'role',
      title: 'roles',
      type: 'array',
      of: [{type: 'reference', to: {type: 'role'}}],
    }),
    defineField({
      name: 'bio',
      title: 'Bio',
      type: 'blockContent',
    }),
  ],

  // TODO: Preview Render
  preview: {
    select: {
      title: 'fullName',
      subtitle: 'bio',
      media: 'userPortrait',
    },
  },
})
