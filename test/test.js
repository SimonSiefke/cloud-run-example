import { app } from '../src/app.js'
import supertest from 'supertest'

const request = supertest(app)

it('Gets the test endpoint', async () => {
  await request
    .get('/')
    .expect('Cache-Control', 'public, max-age=31536000')
    .expect('hello world')
    .expect(200)
})
