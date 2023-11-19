import React from 'react';
import { Tabs, Tab, AppBar, Toolbar, Typography } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';

function NavTabs() {
  const currentPage = useLocation().pathname;

  const tabData = [
   
    { label: 'About', path: '/About' },
    { label: 'Projects', path: '/Projects' },
    { label: 'Contact', path: '/Contact' },
    { label: 'Resume', path: '/Resume' },
  ];

  return (
    <AppBar
      position="sticky"
      sx={{
        backgroundImage: 'linear-gradient(to right, #001f3f, #FFD700)', // Your gradient colors here
        backgroundSize: 'cover',
      }}
    >
      <Toolbar>
        <Typography variant="h6">Neha Sabannavar</Typography>
        <div style={{ marginLeft: 'auto' }}>
          <Tabs
            value={currentPage}
            sx={{
              '.custom-tab.active': {
                backgroundColor: '#e0e0e0', /* Active tab background color */
              },
              '.custom-tab.hover:hover': {
                backgroundColor: '#f5f5f5', /* Hovered tab background color */
              }
            }}
          >
            {tabData.map((tab) => (
              <Tab
                key={tab.path}
                label={tab.label}
                value={tab.path}
                component={Link}
                to={tab.path}
                className={`custom-tab ${currentPage === tab.path ? 'active' : ''} ${currentPage !== tab.path ? 'hover' : ''}`}
              />
            ))}
          </Tabs>
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default NavTabs;
