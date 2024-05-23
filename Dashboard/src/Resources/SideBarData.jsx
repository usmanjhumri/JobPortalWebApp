import React from 'react';
import DashboardIcon from '@mui/icons-material/Dashboard';
import LeaderboardIcon from '@mui/icons-material/Leaderboard';
import WorkIcon from '@mui/icons-material/Work';
import GradingIcon from '@mui/icons-material/Grading';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import { setLogout } from '../Redux/Slice/LoginSlice/LoginSlice';

export const AdminSideBarData = [
  {
    name: 'Dashboard',
    path: '/dashboard',
    icon: <DashboardIcon fontSize="small" />,
    iconClosed: <ArrowDropDownIcon />,
    iconOpened: <ArrowDropUpIcon />,
    subitems: [],
  },
  {
    name: 'Job Categories',
    path: '/categories',
    icon: <LeaderboardIcon fontSize="small" />,
    iconClosed: <ArrowDropDownIcon />,
    iconOpened: <ArrowDropUpIcon />,
    subitems: [],
  },
  {
    name: 'Jobs',
    path: '/jobs',
    icon: <WorkIcon fontSize="small" />,
    iconClosed: <ArrowDropDownIcon />,
    iconOpened: <ArrowDropUpIcon />,
    subitems: [],
  },
  {
    name: 'Applications',
    path: '/applications',
    icon: <GradingIcon fontSize="small" />,
    iconClosed: <ArrowDropDownIcon />,
    iconOpened: <ArrowDropUpIcon />,
    subitems: [],
  },
  {
    name: 'Logout',
    icon: <ExitToAppIcon fontSize="small" />,
    iconClosed: null,
    iconOpened: null,
    subitems: [],
    onClick: (dispatch) => {
      dispatch(setLogout());
    },
  },
];
