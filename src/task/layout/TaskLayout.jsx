import { useState } from "react"
import { Box, Toolbar } from "@mui/material"

import { Navbar } from "../components/Navbar"
import { Sidebar } from "../components/Sidebar"

const drawerWidth = 240

export const TaskLayout = ({ children }) => {
  const [togglMenu, setTogglMenu] = useState(true);

  const onToggleMenu = () => {
    setTogglMenu(!togglMenu)
  }

  return (
    <Box sx={{display: 'flex'}}>
      <Navbar
        drawerWidth={togglMenu ? drawerWidth : 0}
        onToggleMenu={onToggleMenu}
      />

      { togglMenu &&
        <Sidebar drawerWidth={drawerWidth} />
      }

      <Box
        component='main'
        sx={{ flexGrow: 1, p: 3 }}
      >
        <Toolbar></Toolbar>

        { children }
      </Box>
    </Box>
  )
}
