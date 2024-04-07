import sessionConfig from "~/utils/sessionConfig"

export default defineEventHandler(async (event) => {
  await sealSession(event, sessionConfig)
})
