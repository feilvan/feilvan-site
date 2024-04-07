import sessionConfig from '~/utils/sessionConfig';

export default defineEventHandler(async (event) => {

  const body = await readBody(event)

  const password = process.env.NUXT_PASSWORD || '';

  const config = sessionConfig

  var returnData

  await updateSession(event, config, body)
    .then((data) => {
      if (data.data.password !== password) {
        returnData = {
          unlock: false
        }
      } else {
        returnData = {
          unlock: true
        }
      }
    })
    .catch((error) => {
      console.log(error)
    })

  await sealSession(event, config)

  return returnData

})
