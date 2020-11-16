
require('dotenv').config()

const PORT = process.env.PORT
const MONGO_URL = process.env.MONGO_URL
const TESTDB_URL = process.env.TESTDB_URL

module.exports = {
  MONGO_URL,
  PORT,
  TESTDB_URL
}
