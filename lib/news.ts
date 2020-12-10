import axios from 'axios'

const API_URL = 'https://newsapi.org'
const API_VERSION = 'v2'
const API_KEY = process.env.NEXT_PUBLIC_NEWS_API_TOKEN
const ENDPOINT_SOURCES_URL = `${API_URL}/${API_VERSION}/sources?apikey=${API_KEY}`
console.log('API_KEY:', API_KEY)

console.log('ENDPOINT_SOURCES_URL:', ENDPOINT_SOURCES_URL)

// export async function fetchNews() {
//   const data = await axios.get(ENDPOINT_SOURCES_URL)
//   return data
// }

async function fetchAPI(query: string) {
  const res = await fetch(ENDPOINT_SOURCES_URL, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      //   Authorization: `Bearer ${API_KEY}`,
    },
  })

  const json = await res.json()
  if (json.errors) {
    console.error(json.errors)
    throw new Error('Failed to fetch API')
  }
  return json.data
}

export async function fetchNews() {
  const res = await fetch(ENDPOINT_SOURCES_URL)
  const news = await res.json()

  if (!news) {
    return {
      notFound: true,
    }
  }

  return news
}
