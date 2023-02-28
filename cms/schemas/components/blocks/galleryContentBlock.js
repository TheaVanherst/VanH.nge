
import nsfwBlock from '../libs/nsfwToggle.js'
import { altTestBlock, citationBlock, citationURL } from '../libs/citationBlock.js'

const
  altTextRequest = (obj) => {
    let arr = [];

    for (let i = 0; i < obj.length; i++) {
      if (obj[i]?.alt){
        arr[i] = ` ${i}: ${obj[i].alt}`;
      }
    }

    if(arr.length > 1) {
      return "Alt texts: [" + arr + "]"
    } else if (arr.length === 1) {
      return "Alt text: [" + arr + "]"
    } if (arr.length === 0) {
      return "No alternative text provided."
    }
  },

  galleryContentBlock = {
    name: 'gallery',    title: 'Gallery',
    type: 'object',
    fields: [{
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
          altTestBlock,
          citationBlock,
          citationURL,
          nsfwBlock
        ],
      }],
    },{
      name: 'comments', title: 'Comments enabled',
      type: 'boolean',
      initialValue: true,
      description: 'Enable comments under the gallery?',
    },{
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
    },{
      name: 'zoom',     title: 'Content Zoom',
      type: 'boolean',
      initialValue: false,
      description: 'Should we enable zooming of images?',
    }],
    preview: {
      select: {
        images: 'images', image: 'images',
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
  };

export { galleryContentBlock };