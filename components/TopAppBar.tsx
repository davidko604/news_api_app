import React from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import { useRouter } from 'next/router'
import { IconButton } from '@material-ui/core'
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    appbar: { backgroundColor: '#307d30' },
    menuButton: {
      marginRight: theme.spacing(2),
    },

    title: {
      flexGrow: 1,
      textAlign: 'center',
    },
  })
)

export default function TopAppBar(props: {
  title: string
  isSource?: boolean
}) {
  const { title, isSource } = props
  const classes = useStyles()
  const router = useRouter()

  return (
    <div className={classes.root}>
      <AppBar position='static' className={classes.appbar}>
        <Toolbar>
          {isSource ? null : (
            <IconButton
              edge='start'
              className={classes.menuButton}
              color='inherit'
              aria-label='menu'
              size='small'
              onClick={() => router.back()}
            >
              <KeyboardArrowLeftIcon />
              <Typography variant='button' style={{ fontSize: '0.7REM' }}>
                Source List
              </Typography>
            </IconButton>
          )}
          <Typography variant='h6' className={classes.title}>
            {title}
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  )
}
