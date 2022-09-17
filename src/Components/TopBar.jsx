import React from 'react'
import { AppBar, Button, IconButton, Toolbar, Typography } from '@material-ui/core'  
import { Menu } from '@material-ui/icons'
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import useStyles from './styles'

const TopBar = () => {
  const classes = useStyles()
  return (
    <>
        <AppBar className={classes.appBar}>
            <Toolbar className={classes.navBar} >
              <IconButton  color='inherit' edge="start" >
                <Menu/>
              </IconButton>
              <Typography variant='h6'>
                  Home
              </Typography>
              <Button color='inherit' variant='h6'> <ExitToAppIcon/></Button>
            </Toolbar>
        </AppBar>
    </>
  )
}

export default TopBar