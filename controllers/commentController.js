const asyncHandler = require('express-async-handler');
const Comment = require('../models/Comment');

exports.addComment = asyncHandler(async (req, res) => {
  const { postId, content, parent } = req.body;
  if (!postId || !content) { res.status(400); throw new Error('postId and content required'); }
  const comment = await Comment.create({ post: postId, author: req.user._id, content, parent: parent || null });
  await comment.populate('author', 'name');
  res.status(201).json(comment);
});

exports.getCommentsForPost = asyncHandler(async (req, res) => {
  const comments = await Comment.find({ post: req.params.postId }).populate('author','name').sort({ createdAt: -1 });
  res.json(comments);
});

exports.deleteComment = asyncHandler(async (req, res) => {
  const c = await Comment.findById(req.params.id);
  if (!c) { res.status(404); throw new Error('Not found'); }
  if (!c.author.equals(req.user._id) && req.user.role !== 'admin') { res.status(403); throw new Error('Not authorized'); }
  await c.remove();
  res.json({ message: 'deleted' });
});
