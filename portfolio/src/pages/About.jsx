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
      Greetings! I'm Neha, a Software Engineer wielding my skills at AG Mednet. When I'm not immersed in the realm of coding, I indulge in crafting intricate MERN full-stack applications. At this very moment, I'm engrossed in sculpting an innovative platform called "Circling" for my friend, aimed at revolutionizing the landscape of social meditation.
      As a fervent learner, I'm currently diving into the depths of "Chip War" by the illustrious Chris Miller, seeking inspiration and insight to fuel my creative endeavors.
      Stay tuned for forthcoming updates as I weave together the fabric of innovation and imagination into tangible masterpieces.
      </Typography>
    </div>
    </Layout>
  );
}
