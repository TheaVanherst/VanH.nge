
const
  publishDateAsc = {
    title: 'Release Date, New',
    name: 'releaseDateDesc',
    by: [
      {field: 'publishedAt', direction: 'desc'}
    ]
  },

  publishDateDesc = {
    title: 'Release Date, Old',
    name: 'releaseDateAsc',
    by: [
      {field: 'publishedAt', direction: 'asc'}
    ]
  };

export { publishDateAsc, publishDateDesc }
