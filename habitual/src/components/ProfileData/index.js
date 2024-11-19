/* We do not want to make a component for the user profile information
instead e
 */
import React from 'react';
import '../../App.css';
import './styles.css';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'


import {
    BrowserRouter as
    Link,
  } from "react-router-dom";
  

export default function ProfileData(props) {
    return (    
      <Container maxWidth='lg' justifyContent='center'>
        <Typography component="div">
          <Box sx={{ textAlign: 'center', fontSize: 35, fontWeight: 500, ml: 1 }}>
            {props.name}
          </Box>
          <Box sx={{  textAlign: 'center', typography: 'subtitle2', ml: 1, mb: 2 }}>
            @{props.userHandle}
          </Box>
        </Typography>
        <Grid container justifyContent="center" spacing={1}>
            <Grid item>
            <Button
            className="mainButton" 
            variant="outlined"
            to = "/profileAssess"
            component = {Link}
            >
                Assess
            </Button>
            </Grid>
            <Grid item>
            <Button
            className="mainButton" 
            variant="outlined"
            to = "/profile"
            component = {Link}
            >
                Reflect
            </Button>
            </Grid>
            <Grid item>
            <Button
            className="mainButton" 
            variant="outlined"
            to = "/profileHabits"
            component = {Link}
            >
                Habits
            </Button>
            </Grid>
        </Grid>
      </Container>    
    );
}
 