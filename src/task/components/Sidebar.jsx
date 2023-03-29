import { TurnedInNot } from "@mui/icons-material"
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
  Grid
} from "@mui/material"

export const Sidebar = ({ drawerWidth = 240 }) => {
  return (
    <Box
      component='nav'
      sx={{
        width: {sm: drawerWidth},
        flexShrink: {sm: 0}
      }}
    >
      <Drawer
        open
        variant='permanent' // temporary
        sx={{
          display: {xs: 'block'},
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: drawerWidth 
          }
        }}
      >
        <Toolbar>
          <Typography noWrap variant='h6' component='div'>
            Sebastian Meneses
          </Typography>
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
