import { newsList } from "./newsData"

export default defineEventHandler((event) => {
  const id = getRouterParam(event, 'id')
  // Если новость не найдена — выбрасываем 404
  if (!newsList[id]) {
    throw createError({
      statusCode: 404,
      statusMessage: 'Новость не найдена',
      data: {
        myCustomField: true
      }
    })
  }

  return newsList[id]
})