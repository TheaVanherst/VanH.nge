
import {defineField, defineType}  from 'sanity'
import { CheckmarkCircleIcon }    from '@sanity/icons'
import { icon }                   from '../components/misc/verfied'

const
  internalTags = defineType({
    name: 'externalTags', title: 'External Tags',
    type: 'document',
    fields: [
      defineField({
        name: 'emoji', title: 'emoji',
        type: 'string',
      }),
      defineField({
        name: 'alt', title: 'Alt Text',
        type: 'string',
      }),
      defineField({
        name: 'description', title: 'Description',
        description: 'this will only be shown when filtered',
        type: 'text',
      }),
    ],
    icon: CheckmarkCircleIcon,

    preview: {
      select: {
        emoji: 'emoji',
        alt: 'alt',
        desc: 'description'
      },
      prepare(selection) {
        const {alt, emoji, desc} = selection
        return {
          title: `${alt}`,
          subtitle: desc,
          media: icon(emoji),
        }
      }
    }
  });

export default internalTags;