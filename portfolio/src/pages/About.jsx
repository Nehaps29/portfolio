import React from 'react';
import { Typography, Paper } from '@mui/material';
import Avatar from '@mui/material/Avatar';

const styles = {
  background: {
    padding: 21,
    marginTop: 22,
    backgroundColor: "rgb(70,118,168)"
  }
}

export default function About() {

  // const tailwindClassCollection = "bg-red-300 md:bg-blue-500 lg:bg-green-900 flex flex-wrap p-2 m-3"
  return (
    <Paper 
    style={styles.background}
    // className={tailwindClassCollection}
    >
      <Typography variant="h4" gutterBottom>
        About Page
      </Typography>
      <Avatar alt="My Avatar" src='./src/assets/avatar.JPG' sx={{ width: 56, height: 56 }} />
      <Typography>
        Nunc pharetra finibus est at efficitur. Praesent sed congue diam.
        Integer gravida dui mauris, ut interdum nunc egestas sed. Aenean sed
        mollis diam. Nunc aliquet risus ac finibus porta. Nam quis arcu non
        lectus tincidunt fermentum. Suspendisse aliquet orci porta quam semper
        imperdiet. Praesent euismod mi justo, faucibus scelerisque risus cursus
        in. Sed rhoncus mollis diam, sit amet facilisis lectus blandit at.
      </Typography>
    </Paper>
  );
}
