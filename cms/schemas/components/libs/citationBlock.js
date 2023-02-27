const
    altTestBlock = {
          name: 'alt',  title: 'Alternative text', type: 'string',
          validation: Rule => [Rule.max(50).warning('50 characters or less')]},
    citationBlock = {
            name: 'citation',  title: 'citation title', type: 'string',
            validation: Rule => [Rule.max(30).warning('30 characters or less')]},
    citationURL = {
            name: 'citeURL',  title: 'citation url', type: 'string'};

export { altTestBlock, citationBlock, citationURL };