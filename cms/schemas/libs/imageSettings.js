const
    altTestBlock = {
      name: 'alt', title: 'Alternative text',
      type: 'string',
      validation: Rule => Rule.max(64).warning('64 characters or less'),
    },
    citationBlock = {
      name: 'citation',  title: 'citation title',
      type: 'string',
      validation: Rule => Rule.min(12).warning('16 characters or more'),
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
    },
    newPage = {
      name: 'blank',     title: 'Open in new page',
      type: 'boolean',
      initialValue: true,
      description: 'Should we open a new page on link click?',
    }

export { nsfwBlock, zoomEnabled, newPage };
export { altTestBlock, citationBlock, citationURL };
export { citationRender }