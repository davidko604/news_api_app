import { GetServerSideProps } from 'next'
import Head from 'next/head'
import SourceList from '../components/SourceList'
import { fetchNews } from '../lib/news'

export default function Home(props: { news: NewsAPI.Source[] }) {
  const { news } = props
  console.log('news:', news)

  return (
    <div>
      <Head>
        <title>News App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <SourceList news={news} />
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const data: NewsAPI.Request = await fetchNews()
  const news = data?.sources ?? []

  return {
    props: { news },
  }
}
