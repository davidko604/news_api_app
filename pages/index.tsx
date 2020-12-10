import Head from 'next/head'
import { useEffect } from 'react'
import { fetchNews } from '../lib/news'

export default function Home(props: { news }) {
  const { news } = props
  console.log('news:', news)

  // useEffect(() => {
  //   console.log('news:', news)
  // }, [news])

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <footer>
        <a
          href='https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
          target='_blank'
          rel='noopener noreferrer'
        >
          Powered by <img src='/vercel.svg' alt='Vercel Logo' />
        </a>
      </footer>
    </div>
  )
}

export async function getStaticProps() {
  const news = await fetchNews()

  return {
    props: { news }, // will be passed to the page component as props
  }
}
