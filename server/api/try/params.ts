import { SessionConfig } from 'h3'

export default defineEventHandler(async (event) => {
  const body = readBody(event)

  const password = process.env.NUXT_PASSWORD || '';

  const config: SessionConfig = {
    password: process.env.NUXT_SECRET || '',
    maxAge: 60 * 60 * 24 * 7, // 1 week
    name: 'session',
    cookie: {
      path: '/',
      secure: process.env.NODE_ENV === 'production',
    }
  }

  useSession(event, config)

  return event
})
