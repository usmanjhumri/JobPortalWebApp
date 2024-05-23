import React from 'react';
import { styled } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';
import MuiDrawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import { AdminSideBarData } from '../../Resources/SideBarData';
import SideBarMenu from './SubSideBar';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
// import { useNavigate } from 'react-router';

const useStyles = makeStyles(() => ({
  sidebar_logo: {
    marginX: '10% !important',
    height: '32px',
  },
  sideBar: {
    height: 'calc(100vh - 64px) !important',
    overflowY: 'auto',
    overflowX: 'hidden',
    scrollbarWidth: 'none',
    '&::-webkitScrollbar': {
      display: 'none',
    },
    textAlign: 'start',
    padding: '15px !important',
    display: 'flex',
    flexDirection: 'column',
    paddingRight: '0px !important',
    gap: '15px',
  },
}));

const drawerWidth = 210;
const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme, open) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(8)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
  [theme.breakpoints.down('sm')]: {
    position: 'absolute',
    visibility: open ? 'visible' : 'hidden',
  },
});

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  padding: '10px !important',
  backgroundColor: theme.palette.background.main,
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: 'nowrap',
  boxSizing: 'border-box',
  [theme.breakpoints.down('sm')]: {
    position: 'absolute',
  },
  ...(open && {
    ...openedMixin(theme),
    '& .MuiDrawer-paper': openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    '& .MuiDrawer-paper': closedMixin(theme, open),
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'start',
  padding: '15px !important',
  backgroundColor: theme.palette.white.main,

  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const SideBar = ({
  open,
  setOpen,
  setOnHover,
  selectedTab,
  setselectedTab,
}) => {
  const { sideBar } = useStyles({ open });
  const dispatch = useDispatch();
  // const navigate = useNavigate();

  return (
    <Drawer variant="permanent" open={open}>
      <DrawerHeader
        sx={{
          background: (theme) => theme.palette.primary.main,
        }}
      >
        {/* <img src={logo_round} className={sidebar_logo} /> */}
      </DrawerHeader>
      <List
        className={sideBar}
        sx={{
          background: (theme) => theme.palette.primary.main,
        }}
        onMouseOver={() => {
          if (!open) {
            setOpen(true);
            setOnHover(true);
          }
        }}
      >
        {AdminSideBarData.map((item, index) => (
          <SideBarMenu
            open={open}
            item={item}
            key={index}
            setselectedTab={setselectedTab}
            selectedTab={selectedTab}
            dispatch={dispatch}
          // navigate={navigate}
          />
        ))}
      </List>
    </Drawer>
  );
};

export default SideBar;

SideBar.propTypes = {
  open: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired,
  setOnHover: PropTypes.func.isRequired,
  selectedTab: PropTypes.any,
  setselectedTab: PropTypes.func.isRequired,
};
