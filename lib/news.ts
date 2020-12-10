const API_URL = 'https://newsapi.org'
const API_VERSION = 'v2'
const API_KEY = process.env.NEXT_PUBLIC_NEWS_API_TOKEN

// Only handling country for now.  Ignoring language and category.
export async function fetchNews(country?: NewsAPI.Country) {
  const ENDPOINT_SOURCES_URL = `${API_URL}/${API_VERSION}/sources?apikey=${API_KEY}&country=${
    country ?? 'us'
  }`

  const res = await fetch(ENDPOINT_SOURCES_URL)
  const news = await res.json()

  if (!news) {
    return {
      status: 'not found',
    }
  }

  return news
}

// Only handling source and country for now
export async function fetchHeadlines(params: { source: string }) {
  const { source } = params

  const ENDPOINT_HEADLINES_URL = `${API_URL}/${API_VERSION}/top-headlines?apikey=${API_KEY}&sources=${source}`

  const res = await fetch(ENDPOINT_HEADLINES_URL)
  const headlines = await res.json()

  if (!headlines) {
    return {
      status: 'not found',
    }
  }

  return headlines
}
