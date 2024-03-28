'use client';
import React, { useState, useEffect, useContext } from 'react';
import Link from 'next/link';
import Button from '@mui/material/Button';
import { AppBar, Toolbar } from '@mui/material';

const Header: React.FC = () => {

  return (
    <AppBar className="bg-primary" position="static">
        <Toolbar className=" bg-primary flex flex-row justify-between">
            <h1>DXF Parts Hub</h1>   
        </Toolbar>
    </AppBar>
  );
};

export default Header;
