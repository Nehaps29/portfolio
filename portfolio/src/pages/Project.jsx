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
      github: 'https://github.com/Nehaps29/Horiseon_optimization'
    },
    {
      title: 'Book Search App',
      image: './src/assets/book.JPG',
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
    },
    {
      title: 'Text Editor App',
      image: './src/assets/Capture.JPG',
      link: 'https://lit-mountain-41070-3310543b3f22.herokuapp.com/',
      github: 'https://github.com/Nehaps29/pwatexteditor'
    },
    {
      title: 'Note Taker App',
      image: './src/assets/note.JPG',
      link: 'https://vast-tundra-45112-80cd8ed984a3.herokuapp.com/',
      github: 'https://github.com/Nehaps29/simple-note-taker'
    }
  ];

  return (
    <Layout>
      <Typography variant="h5" style={{ fontFamily: 'cursive', marginBottom: '16px', color: 'darkblue', fontStyle: 'italic', display: 'flex', justifyContent: 'center' }}>
          My Projects
        </Typography>
      <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
        {projects.map((project, index) => (
          <Card key={index} sx={{ width: 600, margin: '12px' }}>
            <CardActionArea href={project.link}>
              <CardMedia
                component="img"
                height="140"
                image={project.image}
                alt={project.title}
              />
              <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                  Click here: {project.title}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActionArea href={project.github}>
              <CardContent sx = {{borderTop: '1px solid black'}}>
                <Typography gutterBottom variant="h6" component="div">
                   Click here: Github Repo for {project.title}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </div>
    </Layout>
  );
}
