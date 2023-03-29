
import {defineField, defineType} from 'sanity'
import {
  altTestBlock, citationBlock, citationURL,
  citationRender, nsfwBlock, zoomEnabled,
  newPage }           from '../../libs/imageSettings.js'

const
  altTextRequest = (obj) => {
    let arr = [];

    for (let i = 0; i < obj.length; i++) {
      if (obj[i]?.alt){
        arr[i] = ` ${i}: ${obj[i].alt}`;
      }
    }

    if(arr.length > 1) {
      return "Alt texts: [" + arr + "]";
    }
    else if (arr.length === 1) {
      return "Alt text: [" + arr + "]";
    }
    else if (arr.length === 0) {
      return "No alternative text provided.";
    }
  },

  blockGallery = defineType({
    name: 'blockGallery',    title: 'Block Gallery',
    type: 'object',
    fields: [
      {
        name: 'images',   title: 'Images',
        type: 'array',
        of: [{
          name: 'image',  title: 'Image',
          type: 'image',
          options: {
            hotspot: true,
          },
          validation: Rule => Rule.required(),
          fields: [
            defineField({
              name: 'desc', title: 'Brief Description',
              type: 'descContent',
            }),
            nsfwBlock,
          ],
        }],
      }, {
        name: 'display',  title: 'Display as',
        type: 'string',
        initialValue:
          { title: 'Stacked',           value: 'vertical'},
        validation: Rule => Rule.required(),
        options: {
          list: [
            {title: 'Stacked',          value: 'vertical'},
            {title: 'Dynamic Vertical', value: 'dynamicvertical'},
            {title: 'Dynamic Grid',     value: 'dynamicgrid'},
            {title: 'Grid',             value: 'grid'},
            {title: 'Scroll',           value: 'scroll'},
            {title: 'Carousel',         value: 'carousel'},
          ],
          layout: 'dropdown',
        },
      },
      citationRender,
      zoomEnabled,
    ],

    preview: {
      select: {
        images: 'images',
        image: 'images',
      },
      prepare(selection) {
        const { images, image } = selection;
        return {
          title: `Gallery block of ${Object.keys(images).length} images`,
          subtitle: altTextRequest(image),
          media: image[0]
        };
      },
    },
  });

export default blockGallery;