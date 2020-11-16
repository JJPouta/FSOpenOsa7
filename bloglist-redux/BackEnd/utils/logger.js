const infoMsg = (...params) => {
  if (process.env.NODE_ENV !== 'test') { console.log(...params) }
}

const errorMsg = (...params) => {
  console.error(...params)
}

module.exports = {
  infoMsg, errorMsg

}
