const express = require('express')
const app = express()

app.get('/', (req, res) => {
  const date = new Date().toString()
  res.set('Cache-Control', 'public, max-age=31536000')
  // res.send(`server time is ${date}`)
  res.send('hello world')
})

const port = process.env.PORT || 8080

app.listen(port, () => {
  console.log(`helloworld: listening on port ${port}`)
})
