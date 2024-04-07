import { SessionConfig } from 'h3'

export default defineEventHandler(async (event) => {
  const body = readBody(event)

  const secret = process.env.NUXT_SECRET || '';
  const password = process.env.NUXT_PASSWORD || '';

  const config: SessionConfig = {
    password: secret,
    maxAge: 60 * 60 * 24 * 7, // 1 week
    name: 'session',
    cookie: {
      path: '/',
      secure: process.env.NODE_ENV === 'production',
    }
  }

  const sealed = await sealSession(event, config)
  const unseal = await unsealSession(event, config, sealed)
  const session = await useSession(event, config)

  console.log(unseal)

  return unseal.data

})
