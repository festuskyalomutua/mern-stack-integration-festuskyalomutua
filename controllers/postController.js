const asyncHandler = require('express-async-handler');
const Post = require('../models/Post');
const slugify = require('slugify');

exports.createPost = asyncHandler(async (req, res) => {
  const { title, content, tags } = req.body;
  if (!title || !content) { res.status(400); throw new Error('Title and content required'); }
  const slug = slugify(title, { lower: true, strict: true });
  const post = await Post.create({
    title, content, tags: tags ? tags.split(',').map(t => t.trim()) : [],
    slug, author: req.user._id,
    coverImageUrl: req.file ? `/uploads/${req.file.filename}` : req.body.coverImageUrl
  });
  res.status(201).json(post);
});

exports.getPosts = asyncHandler(async (req, res) => {
  const page = Number(req.query.page) || 1;
  const limit = Number(req.query.limit) || 10;
  const q = req.query.q ? { $or: [{ title: new RegExp(req.query.q,'i') }, { content: new RegExp(req.query.q,'i') }] } : {};
  const total = await Post.countDocuments(q);
  const posts = await Post.find(q).populate('author','name').sort({ createdAt: -1 }).skip((page-1)*limit).limit(limit);
  res.json({ posts, page, totalPages: Math.ceil(total/limit) });
});

exports.getPostBySlug = asyncHandler(async (req, res) => {
  const post = await Post.findOne({ slug: req.params.slug }).populate('author','name');
  if (!post) { res.status(404); throw new Error('Post not found'); }
  res.json(post);
});

exports.updatePost = asyncHandler(async (req, res) => {
  const post = await Post.findById(req.params.id);
  if (!post) { res.status(404); throw new Error('Not found'); }
  if (!post.author.equals(req.user._id) && req.user.role !== 'admin') { res.status(403); throw new Error('Not authorized'); }
  if (req.body.title) {
    post.slug = slugify(req.body.title, { lower: true, strict: true });
  }
  Object.assign(post, req.body);
  if (req.file) post.coverImageUrl = `/uploads/${req.file.filename}`;
  await post.save();
  res.json(post);
});

exports.deletePost = asyncHandler(async (req, res) => {
  const post = await Post.findById(req.params.id);
  if (!post) { res.status(404); throw new Error('Not found'); }
  if (!post.author.equals(req.user._id) && req.user.role !== 'admin') { res.status(403); throw new Error('Not authorized'); }
  await post.remove();
  res.json({ message: 'Deleted' });
});
