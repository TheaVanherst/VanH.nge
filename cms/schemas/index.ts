
// TODO: Content Types
import blockContent from './components/blocks/blockContent'
import blockGallery from './components/blocks/gallery'

// TODO: Post Types
import artPost from './postTypes/artPost'
import blogPosts from './postTypes/blogPosts'
import testPosting from './postTypes/testPosts'

// TODO: Post catagory data
import category from './category'
import author from './author'
import jobDescription from './jobDescription'

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
  category,
];

export { blogData };
