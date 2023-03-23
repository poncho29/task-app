import { Box } from "@mui/system"

import { Navbar } from "../components/Navbar"

const drawerWidth = 240

export const TaskLayout = ({ children }) => {
  return (
    <Box sx={{display: 'flex'}}>
      <Navbar drawerWidth={drawerWidth} />

      {/* Sidebar */}

      <Box
        component='main'
        sx={{ flexGrow: 1, p: 3 }}
      >
        {/* Toolbar */}

        { children }
      </Box>
    </Box>
  )
}
