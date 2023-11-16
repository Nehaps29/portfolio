import React from 'react';
import { Tabs, Tab } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';

function NavTabs() {
  const currentPage = useLocation().pathname;

  const tabData = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/About' },
    { label: 'Projects', path: '/Projects' },
    { label: 'Contact', path: '/Contact' },
    { label: 'Resume', path: '/Resume' },
  ];

  return (
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
  );
}

export default NavTabs;
