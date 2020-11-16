const mongoose = require('mongoose')
const supertest = require('supertest')
const app = require('../app')

const api = supertest(app)

// 4.16
describe('user validation tests', () => {
  test('unique user validation test', async () => {
    const newUser = {
      username: 'testUser',
      name: 'Test User',
      password: 'test'
    }

    const result = await api
      .post('/api/users')
      .send(newUser)
      .expect(400)

    expect(result.error.text).toContain('`username` to be unique')
  })

  test('password length test', async () => {
    const rndm1 = Math.floor(Math.random() * 100)
    const rndm2 = Math.floor(Math.random() * 100)

    const newUser = {
      username: `testuser${rndm1}${rndm2}`,
      name: 'Test User',
      password: 't'
    }

    const result = await api
      .post('/api/users')
      .send(newUser)
      .expect(400)

    expect(result.error.text).toContain('Insufficient password lenght')
  })
})

afterAll(() => {
  mongoose.connection.close()
})
