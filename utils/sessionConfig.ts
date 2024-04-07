import type { SessionConfig } from 'h3'

const secret = process.env.NUXT_SECRET || '';

const sessionConfig: SessionConfig = {
  password: secret,
  maxAge: 60 * 60 * 24 * 7, // 1 week,
  name: 'session',
  cookie: {
    path: '/',
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax'
  },
}

export default sessionConfig;
