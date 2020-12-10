import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import Divider from '@material-ui/core/Divider'
import Skeleton from '@material-ui/lab/Skeleton'

const useStyles = makeStyles({
  root: {
    width: '100%',
    height: '50px',
  },
})

export default function SkeletonList() {
  const classes = useStyles()

  return (
    <List component='nav' className={classes.root}>
      {[...Array(8)].map((_e, i) => {
        return (
          <>
            <ListItem button alignItems='flex-start' key={i}>
              <Skeleton className={classes.root} />
            </ListItem>
            <Divider />
          </>
        )
      })}
    </List>
  )
}
