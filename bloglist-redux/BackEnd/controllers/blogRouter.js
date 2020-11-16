const router = require('express').Router()
const Blog = require('../models/blog')
const User = require('../models/user')
const jwt = require('jsonwebtoken')

router.get('/', async (req, res) => {
  const allBlogs = await Blog.find({}).populate('user', { username: 1, name: 1, id: 1 })

  res.json(allBlogs.map(b => b.toJSON()))
})

const parseToken = req => {
  const auth = req.get('authorization')
  if (auth && auth.toLowerCase().startsWith('bearer ')) {
    return auth.substring(7)
  }

  return null
}

router.post('/', async (req, res) => {
  const token = parseToken(req)
  const decodedToken = jwt.verify(token, process.env.SECRET)

  if (!token || !decodedToken.id) {
    return res.status(401).json({ error: 'token missing or invalid' })
  }

  const user = await User.findById(decodedToken.id)

  const blog = await new Blog(req.body)
  blog.user = user._id

  const newBlogPost = await blog.save()
  user.blogs = user.blogs.concat(newBlogPost._id)
  await user.save()

  res.status(201).json(newBlogPost)
})

router.put('/:id', async (req, res, next) => {
  const updatedBlog = {
    title: req.body.title,
    author: req.body.author,
    likes: req.body.likes,
    user: req.body.user
  }

  await Blog.findByIdAndUpdate(req.params.id, updatedBlog, { new: true })

  res.json(updatedBlog)
})

// 4.13
router.delete('/:id', async (req, res) => {
  await Blog.findByIdAndRemove(req.params.id)
  res.status(204).end()
})

module.exports = router
