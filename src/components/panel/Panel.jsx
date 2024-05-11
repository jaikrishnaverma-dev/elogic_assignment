import * as React from 'react'
import {styled, useTheme} from '@mui/material/styles'
import Box from '@mui/material/Box'
import Drawer from '@mui/material/Drawer'
import CssBaseline from '@mui/material/CssBaseline'
import MuiAppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import List from '@mui/material/List'
import Typography from '@mui/material/Typography'
import Divider from '@mui/material/Divider'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import LaunchIcon from '@mui/icons-material/Launch'
import {Outlet, useLocation, useNavigate} from 'react-router-dom'
import {Avatar, Button, Tooltip} from '@mui/material'
import useMediaQuery from '../../hooks/useMediaQuery.js'
import { panelChildren } from '../../routes.js'
import { toTitleCase } from '../../utils/tools.js'

const drawerWidth = 240

const Main = styled('main', {shouldForwardProp: (prop) => prop !== 'open'})(({theme, open}) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  transition: theme.transitions.create('margin', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen
  }),
  marginLeft: `-${drawerWidth}px`,
  ...(open && {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    }),
    marginLeft: 0
  })
}))

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open'
})(({theme, open}) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    })
  })
}))

const DrawerHeader = styled('div')(({theme}) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end'
}))

export default function Panel() {
  const theme = useTheme()
  const isMobile = useMediaQuery('(max-width: 600px)')

  const [open, setOpen] = React.useState(!isMobile)

  React.useEffect(() => {
    setOpen(!isMobile)
  }, [isMobile])
  const navigate = useNavigate()
  const handleDrawerOpen = () => {
    setOpen(true)
  }

  const handleDrawerClose = () => {
    isMobile&&setOpen(false)
  }
  let location = useLocation()
  let currentPath = location?.pathname.split('/')
  if (currentPath.length) currentPath = currentPath[currentPath.length - 1]

  /**
   * here have to write auth code
   */
console.log({isMobile});
  return (
    <Box sx={{display: 'flex'}}>
      <CssBaseline />
      
      <AppBar position="fixed" open={open} color='transparent'>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{mr: 2, ...(open && {display: 'none'})}}
          >
            <MenuIcon />
          </IconButton>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              width: '100%'
            }}
          >
            <Typography variant="h6" noWrap component="div">
              {'panel'}<a href="" style={{color:"var(--color2light)"}}>#</a>
            </Typography>

         
          </div>
          <div style={{display:"flex",alignItems:"center",gap:"10px"}}>
          <Avatar alt="Remy Sharp" src="/logo192.png" />
          <div className="div" style={{display:"flex",flexDirection:"column",paddingY:"10px"}}>
            <h5 className='abs' >Jai verma</h5>
            <small  className='abs'>dasdas</small>
          </div>
          </div>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box'
          }
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <img style={{height: '60px', width: '80%', margin: '0px 10px'}} src={"/p_logo.png"} alt="" />

          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
  
        <Divider />
        <List sx={{pb:0}}>
            <ListItem sx={{mb:0,pb:0,pt:1}}
            ><Typography>
            User Management
        </Typography></ListItem>
        </List>
        
        <List  >
          {panelChildren
            .filter((item) => item.inNav)
            .map((item, index) => (
              <>
                <ListItem
                  key={item.path}
                  className={`${
                    currentPath === item.path ? 'sidenav_active sidebar_element' : 'sidebar_element'
                  }`}
                  disablePadding
                  onClick={() => {
                    isMobile && handleDrawerClose()
                    navigate(item.path)
                  }}
                >
                  <ListItemButton>
                    <ListItemIcon>{item.icon}</ListItemIcon>
                    <ListItemText primary={toTitleCase(item.path)} />
                  </ListItemButton>
                </ListItem>
           
              </>
            ))}
        </List>
        <Divider />
      </Drawer>
      <Main open={open}>
        <DrawerHeader />
        <Outlet />
  
      </Main>
    </Box>
  )
}