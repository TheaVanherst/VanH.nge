
// TODO: Content Types
import blockContent   from './components/blocks/textContentBlock'
import blockGallery   from './components/blocks/galleryContentBlock'

// TODO: Post Types
import artPost        from './postTypes/artPost'
import blogPosts      from './postTypes/blogPosts'
import testPosting    from './postTypes/testPosts'

// TODO: Post catagory data
import category       from './tagData/category'
import author         from './tagData/author'
import jobDescription from './tagData/jobDescription'

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
  jobDescription,
  category
];

export default blogData;
