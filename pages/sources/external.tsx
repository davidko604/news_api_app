import React from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import Iframe from 'react-iframe'
import TopAppBar from '../../components/TopAppBar'
import { Container, createStyles, makeStyles } from '@material-ui/core'

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      height: '100VH',
    },
  })
)

export default function ExternalPage() {
  const classes = useStyles()
  const router = useRouter()
  const { source, url } = router.query

  return (
    <Container maxWidth='sm' disableGutters className={classes.root}>
      <Head>
        <title>News App - {source}</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <TopAppBar title={`${source}`} />

      <Iframe
        url={`${url}?output=embed`}
        width='100%'
        height='100%'
        frameBorder={0}
        position='relative'
        // referrerpolicy='same-origin'
        sandbox='allow-same-origin'
      />
    </Container>
  )
}
