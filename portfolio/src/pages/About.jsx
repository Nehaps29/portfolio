import React from 'react';
import { Typography, Paper } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Layout from '../components/Layout';
const styles = {
  background: {
    padding: 21
  }
}

export default function About() {

  // const tailwindClassCollection = "bg-red-300 md:bg-blue-500 lg:bg-green-900 flex flex-wrap p-2 m-3"
  return (
     <Layout>
    <div 
    style={styles.background}
    // className={tailwindClassCollection}
    >
      <Typography variant="h5" style={{ fontFamily: 'cursive', marginBottom: '16px', color: 'darkblue', fontStyle: 'italic' }}>
          About Me
        </Typography>
      <Avatar alt="My Avatar" src='./assets/avatar.jpg' sx={{ width: 150, height: 150, marginBottom: '16px' }} />
      <Typography>
      Hello! My name is Neha and I am currently a bootcamp student at Rutgers University. (Completion date: Dec 2023 ) 
      I have been working in the IT industry for more than 8 years and now getting ready to jump into full stack software development. Currently I am working as SQA Analyst and have previously worked as ETL Tester. I am skilled in Informatica development. 
      Note: Will be adding more details soon
      </Typography>
    </div>
    </Layout>
  );
}
