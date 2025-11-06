const router = require('express').Router();
const { protect } = require('../middleware/authMiddleware');
const upload = require('../middleware/upload');
const {
  createPost, getPosts, getPostBySlug,
  updatePost, deletePost
} = require('../controllers/postController');

router.route('/')
  .get(getPosts)
  .post(protect, upload.single('file'), createPost);

router.route('/:id')
  .put(protect, upload.single('file'), updatePost)
  .delete(protect, deletePost);

router.get('/slug/:slug', getPostBySlug);

module.exports = router;
