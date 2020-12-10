import React from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { GetServerSideProps, NextPageContext } from 'next'
import { fetchHeadlines } from '../../lib/news'
import ArticleList from '../../components/ArticleList'

export default function HeadlinesPage(props: { articles; data }) {
  //   const { context } = props
  const { articles, data } = props
  const router = useRouter()

  const { id, source } = router.query
  console.log('router:', router)
  console.log('source:', source)

  console.log('id:', id)
  console.log('articles:', articles)
  console.log('data:', data)

  //   console.log('context:', context)

  return (
    <div>
      <Head>
        <title>News App - {source}</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <ArticleList articles={articles} />
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  console.log('context:', context)
  let id = ''
  if (context.params) {
    id = (context.params.id as string) ?? ''
  }
  const data: NewsAPI.Request = await fetchHeadlines({
    source: id,
  })
  const articles = data?.articles ?? []

  return {
    props: { articles, data },
  }
}
