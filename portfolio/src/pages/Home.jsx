import React from 'react';
import { Typography, Paper } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Layout from '../components/Layout';
export default function Home() {
  return (
    <Layout>
    <Paper style={{ padding: 20, marginTop: 20 }}>
      <Typography variant="h4" gutterBottom>
        About Page
      </Typography>
      <Avatar alt="My Avatar" src= './src/assets/avatar.JPG' sx={{ width: 56, height: 56 }} />
      <Typography>
        Nunc pharetra finibus est at efficitur. Praesent sed congue diam.
        Integer gravida dui mauris, ut interdum nunc egestas sed. Aenean sed
        mollis diam. Nunc aliquet risus ac finibus porta. Nam quis arcu non
        lectus tincidunt fermentum. Suspendisse aliquet orci porta quam semper
        imperdiet. Praesent euismod mi justo, faucibus scelerisque risus cursus
        in. Sed rhoncus mollis diam, sit amet facilisis lectus blandit at.
      </Typography>
    </Paper>
    </Layout>
  );
}
