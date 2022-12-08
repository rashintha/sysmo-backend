import compression from 'compression'
import express from 'express'
import { shouldCompress } from './util/startup.js'
import cors from 'cors'
import router from './router.js'

async function bootstrap() {
  const app = express()
  const port = process.env.PORT || 3000

  app.use(cors({
    origin: process.env.CORS_ORIGIN,
    methods: process.env.CORS_METHODS,
    allowedHeaders: process.env.CORS_ALLOWED_HEADERS
  }))

  // Compress all responses
  app.use(compression({
    // Decide if the response should be compressed or not
    filter: shouldCompress
  }))

  app.use('/api', router)

  await app.listen(port, () => {
    console.log(`Sysmo is listening at http://localhost:${port}`)
  })
}
bootstrap()