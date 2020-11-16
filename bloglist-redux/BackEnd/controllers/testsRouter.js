const router = require('express').Router()
const Blog = require('../models/blog')
const User = require('../models/user')

// Resetoidaan kanta
router.post('/reset', async (req, res) => {
  console.log('reseting test database')
  await Blog.deleteMany({})
  await User.deleteMany({})

  res.status(204).end()
})

// Testiblogien lisäys
router.post('/testblog', async (req, res) => {
  console.log('adding test blogs')

  const blog = await new Blog(req.body)

  const newBlogPost = await blog.save()

  res.status(201).json(newBlogPost)
})
module.exports = router
