const mongoose = require('mongoose')
const supertest = require('supertest')
const app = require('../app')

const api = supertest(app)

test('blogAmount as JSON', async () => {
  const response = await api.get('/api/blogs').expect('Content-Type', /application\/json/)

  expect(response.body).toHaveLength(2)
})

// 4.9
test('identification field as id', async () => {
  const response = await api.get('/api/blogs')

  expect(response.body[0].id).toBeDefined()
})

// 4.10
test('blog posting method functionality', async () => {
  const testBlogPost = {
    title: 'testPost',
    author: 'testAuthor',
    url: 'testUrl.com',
    likes: 99
  }

  // Blogien määrä ennen testiä
  const initialBlogs = 2

  // tehdään post
  await api
    .post('/api/blogs')
    .send(testBlogPost)

  const response = await api.get('/api/blogs').expect('Content-Type', /application\/json/)

  // testi (pituus): onko lisätty
  expect(response.body).toHaveLength(initialBlogs + 1)
  // testi (sisältö): onko sisältö oikea
  expect(response.body[initialBlogs].author).toContain = testBlogPost.author
})

afterAll(() => {
  mongoose.connection.close()
})
