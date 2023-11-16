import cors from 'cors'

const ACCPETED_ORIGINS = [
  'http://localhost:8080',
  'http://localhost:1234',
  'http://localhost:3000',
  'http://127.0.0.1:5500',
  'https://movies.com',
  'https://midu.dev'
]

export const corsMiddelware = ({ acceptedOrigins = ACCPETED_ORIGINS } = {}) => cors({
  origin: (origin, callback) => {
    if (acceptedOrigins.includes(origin)) {
      return callback(null, true)
    }
    if (!origin) {
      return callback(null, true)
    }

    return callback(new Error('Not allowed by CORS'))
  }
})
