import React from 'react';
import { Typography, Link } from '@mui/material';
import Layout from '../components/Layout';

const Resume = () => {
  return (
    <Layout>
      <div>
        <Typography variant="h5" style={{ fontFamily: 'cursive', fontStyle: 'italic' }}>Developer's Resume</Typography>
        <Link href="./src/assets/resume.pdf" download="resume.pdf">
          Download Resume
        </Link>
        <div style={{ marginBottom: '20px' }} />
        <Typography variant="h5" style={{ fontFamily: 'cursive', fontStyle: 'italic' }}>Front End Proficiencies</Typography>
        <ul>
          <li>React.js</li>
          <li>JavaScript</li>
          <li>HTML</li>
          <li>CSS</li>
        </ul>
        <Typography variant="h5" style={{ fontFamily: 'cursive', fontStyle: 'italic' }}>Back End Proficiencies</Typography>
        <ul>
          <li>Postgresql</li>
          <li>Mongoose</li>
          <li>SQL</li>
        </ul>
      </div>
    </Layout>
  );
};

export default Resume;
