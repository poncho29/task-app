import { LogoutOutlined, MenuOutlined } from "@mui/icons-material"
import { AppBar, Grid, IconButton, Toolbar, Typography } from "@mui/material"

import { useAuthStore } from "../../hooks/useAuthStore"

export const Navbar = ({ toggleMenu, onToggleMenu }) => {
  const { startLogout } = useAuthStore();

  return (
    <AppBar
      width='100%'
      position='fixed'
      sx={{
        width: {
          md: `calc(100% - 240px)`
        },
      }}
    >
      <Toolbar>
        <IconButton
          edge='start'
          color='inherit'
          sx={{ 
            mr: 2, 
            display: {
              sm: `${!toggleMenu && 'none'}`,
              md: 'none'
            }
          }}
          onClick={onToggleMenu}
        >
          <MenuOutlined />
        </IconButton>

        <Grid
          container
          direction='row'
          alignItems='center'
          justifyContent='space-between'
        >
          <Typography
            noWrap
            variant="h6"
            component='div'
          >
            My Tasks
          </Typography>

          <IconButton color="error" onClick={startLogout}>
            <LogoutOutlined />
          </IconButton>
        </Grid>
      </Toolbar>
    </AppBar>
  )
}
