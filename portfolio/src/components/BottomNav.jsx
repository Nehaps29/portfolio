import React, { useState } from 'react';
import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { Link } from 'react-router-dom';

const BottomNav = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <BottomNavigation 
    sx={{ backgroundColor: '#FFD700' }} 
     value={value} onChange={handleChange}>
      <BottomNavigationAction
        label="GitHub"
        icon={<GitHubIcon />}
        component={Link}
        to="https://github.com/Nehaps29"
        target="_blank"
        rel="noopener noreferrer"
      />
      <BottomNavigationAction
        label="LinkedIn"
        icon={<LinkedInIcon />}
        component={Link}
        to="https://www.linkedin.com/in/neha-sabannavar/"
        target="_blank"
        rel="noopener noreferrer"
      />

<BottomNavigationAction
        label="YouTube"
        icon={<YouTubeIcon />}
        component={Link}
        to="https://www.youtube.com/@loodog555"
        target="_blank"
        rel="noopener noreferrer"
      />

    </BottomNavigation>
  );
};

export default BottomNav;
