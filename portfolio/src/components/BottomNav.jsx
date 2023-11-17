import React, { useState } from 'react';
import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Link } from 'react-router-dom';

const BottomNav = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <BottomNavigation value={value} onChange={handleChange}>
      <BottomNavigationAction
        label="GitHub"
        icon={<GitHubIcon />}
        component={Link}
        to="https://github.com/your-github-username"
        target="_blank"
        rel="noopener noreferrer"
      />
      <BottomNavigationAction
        label="LinkedIn"
        icon={<LinkedInIcon />}
        component={Link}
        to="https://www.linkedin.com/in/your-linkedin-username"
        target="_blank"
        rel="noopener noreferrer"
      />

    </BottomNavigation>
  );
};

export default BottomNav;
