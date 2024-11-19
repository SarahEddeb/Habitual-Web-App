import React, { useState } from "react";
import "../../App.css";
import userz, { userData } from "../../objects/users/usersObj";
import Box from "@material-ui/core/Box";
import "../../screens/LoginPage/styles.css";
import "./styles.css"
import { TextField, Button, Grid, Typography, Container } from "@material-ui/core";
import axios from "axios";
export default function AddNewUser(props) {
  const [signUpStatus, setSignUpStatus] = useState("");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [signUpUsername, setSignUpUsername] = useState("");
  const [signUpPassword, setSignUpPassword] = useState("");
  const signup = () => {
    props.setTrigger(false);

    if (
      fullName == "" ||
      signUpUsername == "" ||
      email == "" ||
      signUpPassword == ""
    ) {
      setSignUpStatus("All fields are required");
      return;
    }
    const user = {
      name: fullName,
      username: signUpUsername,
      email: email,
      password: signUpPassword,
    };
    console.log(user);

    return axios.post("/users/add/", {
      name: fullName,
      username: signUpUsername,
      email: email,
      password: signUpPassword,
    }).then((res) => {
      if (res.data.message && res.data.newUser) {
        setSignUpStatus("Successfully Signed Up");
      } else {
        setSignUpStatus("Username already in use");
      }
    });
  };
    const [userName, setuserName] = useState("");
    const [handle, setuserHandle] = useState("");
    const addUserHandler = (e) => {
        props.setTrigger(false);
        const newUserObj = new userz(userName, handle);
        userData.push(newUserObj);
        console.log(userData);
      };
    
      const handleChange = (event) => {
        setuserName(event.target.value);
      };
      const handleChange2 = (event) => {
        setuserHandle(event.target.value);
      };
      

  return (props.trigger) ? (
    <Container maxWidth="xs">
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
              label="Full Name"
              onChange={(e) => {
                setFullName(e.target.value);
              }}
              value={fullName}
            />
      </Grid>
      <Grid item xs={12} align="center">
      <TextField
              id="standard-multiline-static"
              variant="standard"
              label="email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              value={email}
            />
      </Grid>
      <Grid item xs={12} align="center">
            <TextField
              id="standard-multiline-static"
              variant="standard"
              label="username"
              onChange={(e) => {
                setSignUpUsername(e.target.value);
              }}
              value={signUpUsername}
            />
          </Grid>
          <Grid item xs={12} align="center">
            <TextField
              id="standard-multiline-static"
              variant="standard"
              label="password"
              type="password"
              onChange={(e) => {
                setSignUpPassword(e.target.value);
              }}
              value={signUpPassword}
            />
          </Grid>

      <Grid item xs={12} align="center">
        <Button onClick={signup} className="smallButton">Submit</Button>
      </Grid>
    </Grid>
    </Grid>
    </Container>


  ) : "";
}
