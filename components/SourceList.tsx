import React from 'react'
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Divider from '@material-ui/core/Divider'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
    },
  })
)

export default function SourceList(props: { news: NewsAPI.Source[] }) {
  const { news } = props
  const classes = useStyles()

  return (
    <List component='nav' className={classes.root} aria-label='mailbox folders'>
      {news.map((item) => {
        return (
          <>
            <ListItem button>
              <ListItemText primary={`${item.name}`} />
            </ListItem>
            <Divider />
          </>
        )
      })}
    </List>
  )
}
