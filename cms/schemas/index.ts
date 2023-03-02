
// TODO: Content Types
import blockContent   from './components/blocks/textContentBlock';
import blockGallery   from './components/blocks/galleryContentBlock';

// TODO: Post Types
import artPost        from './postTypes/artPost';
import blogPosts      from './postTypes/blogPosts';
import testPosting    from './postTypes/testPosts';

// TODO: Post catagory data
import designCategories   from './catagoryData/designCategories';
import artCategories      from './catagoryData/artCatagories';
import genericCategories  from './catagoryData/genericTags';
import categories         from './catagoryData/categories'

// TODO: Author data
import author         from './authorData/author';

const blogData = [
  //content declarations
  blockContent,
  blockGallery,

  //post types
  artPost,
  testPosting,
  blogPosts,

  //post related data
  author,

  designCategories,
  artCategories,
  genericCategories,
  categories
];

export default blogData;
