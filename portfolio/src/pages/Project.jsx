import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardActions } from '@mui/material';
import Layout from '../components/Layout';

export default function Project() {
  const projects = [
    {
      title: 'Horiseon Optimization',
      image: './src/assets/code_refactor.JPG',
      link: 'https://nehaps29.github.io/Horiseon_optimization/',
    },
    {
      title: 'Book Search App',
      image: './src/assets/book_cartoon.gif',
      link: 'https://abrentis.github.io/Virtual-Book-Store-v2/',
    },
    {
      title: 'Restaurant Helper App',
      image: './src/assets/homepageapp.JPG',
      link: 'https://sheltered-bastion-53112-369471263d1d.herokuapp.com',
    },
    {
      title: 'Weather App',
      image: './src/assets/pic.JPG',
      link: 'https://nehaps29.github.io/weather_app/'
    }
  ];

  return (
    <Layout>
      <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
        {projects.map((project, index) => (
          <Card key={index} sx={{ width: 250, margin: '12px' }}>
            <CardActionArea href={project.link}>
              <CardMedia
                component="img"
                height="140"
                image={project.image}
                alt={project.title}
              />
              <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                  {project.title}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </div>
    </Layout>
  );
}
