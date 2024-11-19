import React, { useState } from "react";
import "../../App.css";
import Box from "@material-ui/core/Box";
import "../../screens/LoginPage/styles.css";
import "./styles.css"
import { TextField, Button, Grid, Typography, Container } from "@material-ui/core";
import userz from "../../objects/users/usersObj"; // do i import the func?

export default function AddNewUsers(props) {
    const [username, setusername] = useState("");
    const [userhandlername, sethandler] = useState("");
    const userHandler = (e) => {
        props.setTrigger(false);
        const newUserObj = new userz(username, userhandlername);
        userData.push(newUserObj);
        console.log(userData) // does it know where to get user data
      };
    
      const handleChange = (event) => {
        setusername(event.target.value);
      };
      const handleChange2 = (event) => {
        sethandler(event.target.value);
      };
      

  return (props.trigger) ? (
    <Container maxWidth="sm">
    <Grid container spacing={0}
    alignItems="center"
    // justify="center"
    style={{ minHeight: "100vh" }}>
    <Grid container className="round-edge  signin-style shadow" spacing={2}>
      <Grid item xs={12} align="center">
      <Typography component="div">
          <Box sx={{ textAlign: 'center', fontSize: 35, fontWeight: 500 }}>
            Add New User
          </Box>
        </Typography>
      </Grid>
      <Grid item xs={12} align="center">
        <TextField
          id="standard-multiline-static"
          variant="standard"
          label="User Name"
          onChange={handleChange}
          value={username}
        />
      </Grid>
      <Grid item xs={12} align="center">
        <TextField
         id="standard-multiline-static"
         variant="standard"
         label="User Handlename"
         onChange={handleChange2}
          value={userhandlername}
        />
      </Grid>
      <Grid item xs={12} align="center">
        <Button onClick={userHandler} className="smallButton">Submit</Button>
      </Grid>
    </Grid>
    </Grid>
    </Container>
    

  ) : "";
}