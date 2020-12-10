import React from 'react'
import Link from 'next/link'
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Divider from '@material-ui/core/Divider'
import { Avatar, ListItemAvatar } from '@material-ui/core'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      backgroundColor: theme.palette.background.paper,
    },
    icon: {
      color: '#c5c3c5',
    },
    image: {
      width: '60px',
      height: '60px',
    },
    avatar: {
      marginRight: '1REM',
    },
  })
)

export default function ArticleList(props: { articles: NewsAPI.Article[] }) {
  const { articles } = props
  const classes = useStyles()

  return (
    <List component='nav' className={classes.root} aria-label='mailbox folders'>
      {articles.map((item) => {
        return (
          <>
            <Link href={`${item.url}`}>
              <ListItem button alignItems='flex-start'>
                <ListItemAvatar className={classes.avatar}>
                  <Avatar
                    variant={'square'}
                    src={`${item.urlToImage}`}
                    className={classes.image}
                  />
                </ListItemAvatar>
                <ListItemText
                  primary={`${item.title}`}
                  secondary={`${item.description}`}
                />
              </ListItem>
            </Link>
            <Divider />
          </>
        )
      })}
    </List>
  )
}
