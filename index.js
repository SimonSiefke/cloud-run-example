import express from 'express'

const app = express()

app.get('/', (req, res) => {
  const date = new Date().toString()
  res.set('Cache-Control', 'public, max-age=31536000')
  res.send('hello world')
})

app.listen(8080, () => console.log(`listening on port 8080`))
