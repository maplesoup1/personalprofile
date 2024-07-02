import React from 'react';
import AppBar from '@mui/material/AppBar';
import { AiFillHome } from "react-icons/ai";
import { AiFillRobot } from "react-icons/ai";
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import './Navbar.css';
import { styled } from '@mui/system';


const CustomAppBar = styled(AppBar)({
  backgroundColor: 'antiquewhite',
  color: 'black',
});

const Navbar = () => {
  return (
    <div className="navbar-root">
      <CustomAppBar position="static">
        <Toolbar>
          <Typography variant="h6" className="navbar-title">
            XIAOFENGTANG.COM
          </Typography>
          <MenuItem className="navbar-link">
              <AiFillHome />
          </MenuItem>
          <MenuItem className="navbar-link"><AiFillRobot /></MenuItem>
        </Toolbar>
      </CustomAppBar>
    </div>
  );
};

export default Navbar;
