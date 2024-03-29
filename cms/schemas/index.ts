
// TODO: Content Types
import blockContent   from './components/blocks/textContentBlock';
import descContent    from './components/blocks/descContentBlock';
import blockGallery   from './components/blocks/galleryContentBlock';

// TODO: Post Types
import artPosts       from './postTypes/artPosts';
import designPosts    from './postTypes/designPosts';
import blogPosts      from './postTypes/blogPosts';
import testPosting    from './postTypes/testPosts';

// TODO: Post catagory data
import codingCategories   from './catagoryData/codingTags';
import designCategories   from './catagoryData/designCategories';
import artCategories      from './catagoryData/artCatagories';
import genericCategories  from './catagoryData/genericTags';
import highlightTags      from './catagoryData/highlightTags';

import internalTags   from './authorData/internalTags';
import externalTags   from './authorData/externalTags';

// TODO: Author data
import author         from './authorData/author';
import authorTags     from './authorData/authorTag';

const blogData = [
  //content declarations
  descContent,
  blockContent,
  blockGallery,

  //post types
  artPosts,
  designPosts,
  testPosting,
  blogPosts,

  //post related data
  author,
  authorTags,
  internalTags,
  externalTags,

  codingCategories,
  designCategories,
  artCategories,
  genericCategories,
  highlightTags,
];

export default blogData;
