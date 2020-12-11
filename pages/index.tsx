import { Container } from '@material-ui/core'
import { GetServerSideProps } from 'next'
import Head from 'next/head'
import SourceList from '../components/SourceList'
import TopAppBar from '../components/TopAppBar'
import { fetchNews } from '../lib/news'

export default function Home(props: { news: NewsAPI.Source[]; data }) {
  const { news } = props

  return (
    <Container maxWidth='sm'>
      <Head>
        <title>News App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <body>
        <div style={{ height: '50px' }} />
        <TopAppBar title='Source List' isSource={true} />
        <SourceList news={news} />
      </body>
    </Container>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const data: NewsAPI.Request = await fetchNews()
  const news = data?.sources ?? []

  return {
    props: { news },
  }
}
