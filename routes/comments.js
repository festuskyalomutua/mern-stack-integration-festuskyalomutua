const router = require('express').Router();
const { protect } = require('../middleware/authMiddleware');
const { addComment, getCommentsForPost, deleteComment } = require('../controllers/commentController');

router.get('/:postId', getCommentsForPost);
router.post('/', protect, addComment);
router.delete('/:id', protect, deleteComment);

module.exports = router;
