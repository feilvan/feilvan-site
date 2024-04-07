export default defineEventHandler((event) => {
  const name = getRouterParam(event, 'name')
  console.log(event)

  return `Hello, ${name}!`
})
