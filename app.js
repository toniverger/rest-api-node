import express, { json } from 'express'

import { moviesRouter } from './routes/movies.js'
import { corsMiddelware } from './middlewares/cors.js'

const app = express()
app.use(json())
app.use(corsMiddelware())
app.disable('x-powered-by')

app.use('/movies', moviesRouter)

const PORT = process.env.PORT ?? 1234

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`)
})
