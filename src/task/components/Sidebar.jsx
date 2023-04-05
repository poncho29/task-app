import { TurnedInNot, MenuOutlined } from "@mui/icons-material"
import {
  Drawer,
  Box,
  Toolbar,
  Typography,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Grid,
  IconButton
} from "@mui/material"

import { useAuthStore } from "../../hooks/useAuthStore";

export const Sidebar = ({ onToggleMenu }) => {
  const { user } = useAuthStore();
  
  return (
    <Box
      width='240px'
      component='nav'
    >
      <Drawer
        open
        variant='permanent' // temporary
        sx={{          
          '& .MuiDrawer-paper': {
            width: '240px',
            boxSizing: 'border-box'
          }
        }}
      >
        <Toolbar sx={{display: 'flex', gap: '.5rem'}}>
          <Typography noWrap variant='h6' component='div'>
            { user.name }
          </Typography>
          <IconButton
            edge='start'
            color='inherit'
            onClick={onToggleMenu}
            sx={{display: { md: 'none' }}}
          >
            <MenuOutlined />
          </IconButton>
        </Toolbar>
        <Divider />

        <List>
          {
            ['Home', 'Completed', 'Profile'].map(text => (
              <ListItem key={text}>
                <ListItemButton>
                  <ListItemIcon>
                    <TurnedInNot />
                  </ListItemIcon>
                  <Grid container>
                    <ListItemText primary={text}/>
                  </Grid>
                </ListItemButton>
              </ListItem>
            ))
          }
        </List>
      </Drawer>
    </Box>
  )
}
