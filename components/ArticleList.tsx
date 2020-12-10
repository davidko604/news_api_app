import React from 'react'
import Link from 'next/link'
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Divider from '@material-ui/core/Divider'
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
    },
    icon: {
      color: '#c5c3c5',
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
              <ListItem button>
                <ListItemText primary={`${item.title}`} />
                <KeyboardArrowRightIcon className={classes.icon} />
              </ListItem>
            </Link>
            <Divider />
          </>
        )
      })}
    </List>
  )
}
