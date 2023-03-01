const
    altTestBlock = {
      name: 'alt', title: 'Alternative text',
      type: 'string',
      validation: Rule => Rule.max(50).warning('50 characters or less'),
    },


    citationBlock = {
      name: 'citation',  title: 'citation title',
      type: 'string',
      validation: Rule => Rule.max(30).warning('30 characters or less'),
    },
    citationURL = {
      name: 'citeURL',  title: 'citation url',
      type: 'string'
    },
    citationRender = {
      name: 'comments', title: 'Comments enabled',
      type: 'boolean',
      initialValue: true,
      description: 'Show comments under the gallery as citation?',
    },


    nsfwBlock = {
      name: 'NSFW',     title: 'Preview Blur',
      type: 'boolean',
      initialValue: false,
      description: 'Should we blur this images?',
    },
    zoomEnabled = {
      name: 'zoom',     title: 'Content Zoom',
      type: 'boolean',
      initialValue: false,
      description: 'Should we enable zooming of images?',
    };

export { nsfwBlock, zoomEnabled };
export { altTestBlock, citationBlock, citationURL };
export { citationRender }