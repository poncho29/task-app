import { Box, Toolbar } from "@mui/material"

import { Navbar } from "../components/Navbar"
import { Sidebar } from "../components/Sidebar"

const drawerWidth = 240

export const TaskLayout = ({ children }) => {
  return (
    <Box sx={{display: 'flex'}}>
      <Navbar drawerWidth={drawerWidth} />

      <Sidebar drawerWidth={drawerWidth} />

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
