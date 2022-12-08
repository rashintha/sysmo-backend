import compression from 'compression'
import express, { json } from 'express'
import { shouldCompress } from './util/startup.js'
import cors from 'cors'
import router from './router/router.js'
import dotenv from 'dotenv'

async function bootstrap() {
  const app = express()
  dotenv.config()
  const port = process.env.PORT || 3000

  // Use the following CORS
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

  // Request body parsers
  app.use(json())

  // Use the global prefix api
  app.use('/api', router)

  await app.listen(port, () => {
    console.log(`Sysmo is listening at http://localhost:${port}`)
  })
}
bootstrap()