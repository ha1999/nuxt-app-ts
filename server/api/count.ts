export default defineEventHandler(event => ({
    path: '/api/count',
    query: getQuery(event)
  }))