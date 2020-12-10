import React from 'react'
import Link from 'next/link'
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Divider from '@material-ui/core/Divider'
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight'
import SkeletonList from './SkeletonList'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      backgroundColor: theme.palette.background.paper,
    },
    icon: {
      color: '#c5c3c5',
    },
  })
)

export default function SourceList(props: { news?: NewsAPI.Source[] }) {
  const { news } = props
  console.log('news:', news)
  const classes = useStyles()

  return (
    <List component='nav' className={classes.root}>
      {news ? (
        news.map((item) => {
          return (
            <>
              <Link href={`/sources/${item.id}?source=${item.name}`}>
                <ListItem button>
                  <ListItemText primary={`${item.name}`} />
                  <KeyboardArrowRightIcon className={classes.icon} />
                </ListItem>
              </Link>
              <Divider />
            </>
          )
        })
      ) : (
        <SkeletonList />
      )}
    </List>
  )
}
