const config = require('./utils/config')
const express = require('express')
const app = express()
const cors = require('cors')
const router = require('./controllers/blogRouter')
const usersRouter = require('./controllers/usersRouter')
const loginRouter = require('./controllers/loginRouter')
const middleware = require('./utils/middleware')
const logger = require('./utils/logger')
const mongoose = require('mongoose')
mongoose.set('useCreateIndex', true)
mongoose.set('useFindAndModify', false)
let connString = null

// Testi vai prod moodi
if (process.env.NODE_ENV === 'test') {
  connString = config.TESTDB_URL
  console.log('Testing database is selected')
} else {
  connString = config.MONGO_URL
}

mongoose.connect(connString, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => logger.infoMsg('Connected to Blogi database'))
  .catch((error) => logger.errorMsg('Error connecting to Blogi database:', error.message))

app.use(cors())
app.use(express.static('build'))
app.use(express.json())
app.use(middleware.requestLogger)

if (process.env.NODE_ENV === 'test') {
  const testsRouter = require('./controllers/testsRouter')
  app.use('/api/testing', testsRouter)
  console.log('Blog backend running in test mode')
}

app.use('/api/login', loginRouter)
app.use('/api/blogs', router)
app.use('/api/users', usersRouter)

app.use(middleware.errorHandler)

module.exports = app
