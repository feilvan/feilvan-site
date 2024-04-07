import sessionConfig from '~/utils/sessionConfig';

export default defineEventHandler(async (event) => {
  const session = await useSession(event, sessionConfig)

  return session.data
})
