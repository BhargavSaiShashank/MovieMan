import React, { useState } from 'react';
import { Drawer as MUIDrawer, List, ListItem, ListItemIcon, ListItemText, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import MovieIcon from '@mui/icons-material/Movie';

function Drawer() {
  const [open, setOpen] = useState(false);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <>
      <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleDrawer}>
        <MenuIcon />
      </IconButton>
      <MUIDrawer anchor="left" open={open} onClose={toggleDrawer}>
        <List>
          <ListItem button>
            <ListItemIcon>
              <MovieIcon />
            </ListItemIcon>
            <ListItemText primary="Movies" />
          </ListItem>
          {/* Add more list items as needed */}
        </List>
      </MUIDrawer>
    </>
  );
}

export default Drawer;