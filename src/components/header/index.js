import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Grid,
  Drawer,
  ListItem,
  List,
  Divider,
  ListItemIcon,
  ListItemText,
  makeStyles
} from "@material-ui/core";
import { Home, VideoCall, RateReview, Keyboard, PieChart, Assignment, ChevronRight } from '@material-ui/icons/'
import MenuIcon from '@material-ui/icons/Menu';
import { withRouter } from "react-router";

const useStyles = makeStyles({
  header: {
    backgroundColor: "transparent",
    color: "black",
    boxShadow: "0px 0px 0px 0px"
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});

const NavDrawer = props => {
  const { history } = props;
  const classes = useStyles();
  const [isOpen, setOpen] = useState(false);
  const itemsList = [
    {
      text: "Home",
      icon: <Home />,
      onClick: () => history.push("/")
    },
    {
      text: "Start Meeting",
      icon: <VideoCall />,
      onClick: () => history.push("/meeting")
    },
    {
      text: "Review",
      icon: <RateReview />,
      onClick: () => history.push("/review")
    },
    {
      text: "Keyword",
      icon: <Keyboard />,
      onClick: () => history.push("/keyword")
    },
    {
      text: "Summary",
      icon: <Assignment />,
      onClick: () => history.push("/summary")
    },
    {
      text: "Pie Chart",
      icon: <PieChart />,
      onClick: () => history.push("/pieChart")
    }
  ];

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <>
      <IconButton
        onClick={handleDrawerOpen}
        edge="start"
        color="inherit"
        aria-label="menu">
        <MenuIcon />
      </IconButton>
      <Drawer anchor="left"
        open={isOpen}
        className={classes.drawerHeader}
        onClose={handleDrawerClose}>
        <IconButton onClick={handleDrawerClose} styles={''}>
          <ChevronRight />
        </IconButton>
        <Divider />
        <List>
          {itemsList.map((item, index) => {
            const { text, icon, onClick } = item;
            return (
              <ListItem button key={text} onClick={onClick}>
                {icon && <ListItemIcon>{icon}</ListItemIcon>}
                <ListItemText primary={text} />
              </ListItem>
            );
          })}
        </List>
      </Drawer>
    </>
  )
}

const MUIDrawer = withRouter(NavDrawer);

const Header = () => {
  const classes = useStyles();
  return (
    <Grid item xs={12}>
      <AppBar position="sticky" className={classes.header}>
        <Toolbar>
          <MUIDrawer />
          <Typography variant="h5" component="h1">
            NotesFree
          </Typography>
        </Toolbar>
      </AppBar>
    </Grid>
  )
}

export default Header;