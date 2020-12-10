const API_URL = 'https://newsapi.org'
const API_VERSION = 'v2'
const API_KEY = process.env.NEXT_PUBLIC_NEWS_API_TOKEN
const ENDPOINT_SOURCES_URL = `${API_URL}/${API_VERSION}/sources?apikey=${API_KEY}`

export async function fetchNews() {
  const res = await fetch(ENDPOINT_SOURCES_URL)
  const news = await res.json()

  if (!news) {
    return {
      status: 'not found',
    }
  }

  return news
}
