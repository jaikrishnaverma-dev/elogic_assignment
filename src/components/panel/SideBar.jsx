import { List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import React from 'react'
import { panelChildren } from '../../routes'
import { useNavigate } from 'react-router-dom'
import { toTitleCase } from '../../utils/tools'

const SideBar = (props) => {
    const {currentPath,isMobile,handleDrawerClose,panelChildren}=props
    const navigate=useNavigate()
  return (
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
  )
}

export default SideBar