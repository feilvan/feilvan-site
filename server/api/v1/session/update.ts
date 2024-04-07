import sessionConfig from "~/utils/sessionConfig"

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  await updateSession(event, sessionConfig, body)
})
