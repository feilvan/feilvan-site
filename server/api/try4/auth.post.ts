import sessionConfig from '~/utils/sessionConfig';

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const session = await useSession(event, sessionConfig)
  const password = process.env.NUXT_PASSWORD || '';

  const auth = body.password === password

  await session.update({
    unlock: auth
  })

  return session.data
})
