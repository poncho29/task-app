import { NavLink } from "react-router-dom";
import FactCheckIcon from '@mui/icons-material/FactCheck';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import CollectionsBookmarkIcon from '@mui/icons-material/CollectionsBookmark';
import { MenuOutlined } from "@mui/icons-material"
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
            routes.map((item) => (
              <ListItem
                key={item.name}
                to={item.path}
                component={NavLink}
              >
                <ListItemButton>
                  <ListItemIcon>
                    { item.name === 'Home' ? <CollectionsBookmarkIcon/>
                      : item.name === 'Complete' ? <FactCheckIcon/> 
                      : <AccountBoxIcon/>
                    }
                  </ListItemIcon>
                  <Grid container>
                    <ListItemText
                      primary={item.name}
                      sx={{ color: 'black' }}
                    />
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

const routes = [
  { path: '/', name: 'Home' },
  { path: '/complete', name: 'Complete' },
  { path: '/profile', name: 'Profile' },
]