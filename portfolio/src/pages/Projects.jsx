import React from 'react';
import { Grid, Paper, Typography } from '@mui/material';


const useStyles = {
  detailContainer: {
    margin: "2rem",
  },
  workSide: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
  },
  bigBox: {
    flexGrow: 1,
    maxWidth: '50%',
    // padding: theme.spacing(2),
  },
  smallBox: {
    flexGrow: 1,
    maxWidth: '25%',
    // padding: theme.spacing(2),
  },
  image: {
    width: '100%',
    height: 'auto',
  },
};

export default function Project() {
  // const classes = useStyles();
  const classes = {}
  
  return (
    
    <div style={useStyles.detailContainer}>
      <Typography variant="h4" className={classes.workSide}>
        My Work
      </Typography>
      <Grid container spacing={2} className={classes.workFlexContainer}>
        <Grid item xs={12} sm={6} md={3}>
          <Paper className={classes.bigBox}>
            <a href="https://nehaps29.github.io/Horiseon_optimization/">
              <img
                src="./assets/images/code_refactor.JPG"
                alt="code-optimization"
                className={classes.image}
              />
              <Typography variant="caption">Horiseon Optimization</Typography>
            </a>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Paper className={classes.smallBox}>
            <a href="https://nehaps29.github.io/prework_study_guide/">
              <img
                src="./assets/images/pre_study.JPG"
                alt="pre-work-study-guide"
                className={classes.image}
              />
              <Typography variant="caption">Pre-Work Study Guide</Typography>
            </a>
          </Paper>
        </Grid>
        {/* Add similar Grid items for other projects */}
      </Grid>
    </div>
    
  );
};


