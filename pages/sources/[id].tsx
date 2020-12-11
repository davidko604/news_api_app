import React from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { GetServerSideProps } from 'next'
import { fetchHeadlines } from '../../lib/news'
import ArticleList from '../../components/ArticleList'
import TopAppBar from '../../components/TopAppBar'
import { Container } from '@material-ui/core'

export default function HeadlinesPage(props: { articles: NewsAPI.Article[] }) {
  const { articles } = props
  const router = useRouter()
  const { source } = router.query
  return (
    <Container>
      <Head>
        <title>News App - {source}</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <body>
        <div style={{ height: '50px' }} />
        <TopAppBar title={`${source}`} />
        <ArticleList articles={articles} />
      </body>
    </Container>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  let id = ''
  if (context.params) {
    id = (context.params.id as string) ?? ''
  }
  const data: NewsAPI.Request = await fetchHeadlines({
    source: id,
  })
  const articles = data?.articles ?? []

  return {
    props: { articles },
  }
}
