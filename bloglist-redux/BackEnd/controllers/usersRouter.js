const bcrypt = require('bcrypt')
const usersRouter = require('express').Router()
const User = require('../models/user')
require('express-async-errors')

usersRouter.post('/', async (req, res) => {
  const body = req.body
  // testataan salasanan pituus

  console.log(body.password.length)

  if (body.password.length < 3) {
    return res.status(400).json({ error: 'Insufficient password lenght' })
  }

  const saltRounds = 10
  const passwordHash = await bcrypt.hash(body.password, saltRounds)

  const newUser = new User({
    username: body.username,
    name: body.name,
    passwordHash
  })

  const savedUser = await newUser.save()

  res.json(savedUser)
})

usersRouter.get('/', async (req, res) => {
  const users = await User
    .find({}).populate('blogs')

  res.json(users.map(u => u.toJSON()))
})

module.exports = usersRouter
