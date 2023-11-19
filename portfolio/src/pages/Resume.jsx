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
        <Typography variant="h5" style={{ fontFamily: 'cursive', fontStyle: 'italic' }}>Proficiencies</Typography>
        <ul>
          <li>React.js</li>
          <li>JavaScript</li>
          <li>HTML</li>
          <li>CSS</li>
          <li>Mongoose</li>
        </ul>
      </div>
    </Layout>
  );
};

export default Resume;
