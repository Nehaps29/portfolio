import React from 'react';
import { Typography, Link, List, ListItem, ListItemText } from '@mui/material';
import Layout from '../components/Layout';

const Resume = () => {
  return (
    <Layout>
      <div>
        <Typography variant="h5">Developer's Resume</Typography>
        <Link href="./src/assets/resume.pdf" download="resume.pdf">
          Download Resume
        </Link>
        <div style={{ marginBottom: '20px' }} />
        <Typography variant="h5">Proficiencies</Typography>
        <List dense>
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
          <ListItem>
            <ListItemText primary="Mongoose" />
          </ListItem>
        </List>
      </div>
    </Layout>
  );
};

export default Resume;
