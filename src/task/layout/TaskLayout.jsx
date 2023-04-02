import { useState } from "react"
import { Box, Toolbar } from "@mui/material"

import { Navbar } from "../components/Navbar"
import { Sidebar } from "../components/Sidebar"

export const TaskLayout = ({ children }) => {
  const [toggleMenu, setTogglMenu] = useState(true);

  const onToggleMenu = () => {
    setTogglMenu(!toggleMenu)
  }

  return (
    <Box sx={{display: {md: 'flex'}}}>
      <Navbar
        toggleMenu={toggleMenu}
        onToggleMenu={onToggleMenu}
      />

      <Box          
        sx={{
          display: {
            xs: `${toggleMenu && 'none'}`,
            md: `${toggleMenu && 'block'}`,
          } 
        }}
      >
        <Sidebar
          toggleMenu={toggleMenu}
          onToggleMenu={onToggleMenu}
        />
      </Box>

      <Box
        component='main'
        sx={{ flexGrow: 1, p: '22px' }}
      >
        <Toolbar></Toolbar>

        { children }
      </Box>
    </Box>
  )
}
