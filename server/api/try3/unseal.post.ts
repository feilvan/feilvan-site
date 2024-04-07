import sessionConfig from '~/utils/sessionConfig';

export default defineEventHandler(async (event) => {

  const config = sessionConfig

  var returnData

  await unsealSession(event, config, getCookie(event, "session") as string)
    .then((data) => {
      returnData = data
    })
    .catch((error) => {
      console.log(error)
    })

  await sealSession(event, config)

  return returnData
})
