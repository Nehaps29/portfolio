import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardActions } from '@mui/material';
import Layout from '../components/Layout';

// import imageSrc from '../../public/assets/code_refactor.jpg'

export default function Project() {
  const projects = [
    {
      title: 'Horiseon Optimization',
      image:  './assets/code_refactor.jpg',
      link: 'https://nehaps29.github.io/Horiseon_optimization/',
      github: 'https://github.com/Nehaps29/Horiseon_optimization'
    },
    {
      title: 'Book Search App',
      image: './assets/book.jpg',
      link: 'https://abrentis.github.io/Virtual-Book-Store-v2/',
    },
    {
      title: 'Restaurant Helper App',
      image: './assets/homepageapp.jpg',
      link: 'https://sheltered-bastion-53112-369471263d1d.herokuapp.com',
    },
    {
      title: 'Weather App',
      image: './assets/pic.jpg',
      link: 'https://nehaps29.github.io/weather_app/'
    },
    {
      title: 'Text Editor App',
      image: './assets/Capture.jpg',
      link: 'https://lit-mountain-41070-3310543b3f22.herokuapp.com/',
      github: 'https://github.com/Nehaps29/pwatexteditor'
    },
    {
      title: 'Note Taker App',
      image: './assets/note.jpg',
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
          <Card key={index}  sx={{ width: 300, margin: '12px' }}>
            <CardActionArea href={project.link}>
              <CardMedia
                component="img"
                height="80"
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
            
              <CardContent sx = {{borderTop: '1px solid black', height: 20 }}>
              
                <Typography gutterBottom variant="h6" component="div">
                   Click here for Github Repo 
                </Typography>
                
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </div>
      
    </Layout>
  );
}
