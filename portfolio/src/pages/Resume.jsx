import React from 'react';
import { Typography, Link, List, ListItem, ListItemText } from '@mui/material';
import Layout from '../components/Layout';
export default function Resume() {
  return (
    <Layout>
    <div>
      <Typography variant="h1">Developer's Resume</Typography>
      
      <Typography variant="body1">Download the resume:</Typography>
      <Link href="./src/assets/resume.pdf" download="resume.pdf">
        Download Resume
      </Link>

      <Typography variant="h2">Proficiencies</Typography>
      <List>
        <ListItem>
          <ListItemText primary="React.js" />
        </ListItem>
        <ListItem>
          <ListItemText primary="JavaScript" />
        </ListItem>
        <ListItem>
          <ListItemText primary="HTML" />
        </ListItem>
        <ListItem>
          <ListItemText primary="CSS" />
        </ListItem>
        {/* Add more proficiencies as needed */}
      </List>
    </div>
    </Layout>
  );
};


