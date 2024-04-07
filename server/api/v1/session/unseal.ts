import sessionConfig from "~/utils/sessionConfig"

export default defineEventHandler(async (event) => {
  const name = sessionConfig.name || 'session'
  try {
    const unseal = await unsealSession(event, sessionConfig, getCookie(event, name) as string)
    return unseal
  } catch (error) {
    return {
      error: error
    }
  }
})
