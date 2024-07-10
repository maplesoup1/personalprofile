import React from 'react';
import AppBar from '@mui/material/AppBar';
import { AiFillHome } from "react-icons/ai";
import { AiFillRobot } from "react-icons/ai";
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import { AiFillMerge } from "react-icons/ai";
import { MdCastForEducation } from "react-icons/md";
import { AiFillAlert } from "react-icons/ai";
import { IoIosContacts } from "react-icons/io";
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
            <a href="#home">
              <AiFillHome />
            </a>
          </MenuItem>
          <MenuItem className="navbar-link">
            <a href="#about">
              <AiFillRobot />
            </a>
          </MenuItem>
          <MenuItem className="navbar-link">
            <a href="#skills">
            <AiFillMerge />
            </a>
          </MenuItem>
          <MenuItem className="navbar-link">
            <a href="#education">
            <MdCastForEducation />
            </a>
          </MenuItem>
          <MenuItem className="navbar-link">
            <a href="#qualification">
            <AiFillAlert />
            </a>
          </MenuItem>
          <MenuItem className="navbar-link">
            <a href="#contact">
            <IoIosContacts />
            </a>
          </MenuItem>
        </Toolbar>
      </CustomAppBar>
    </div>
  );
};

export default Navbar;
