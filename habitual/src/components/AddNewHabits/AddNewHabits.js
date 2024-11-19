import React, { useState } from "react";
import "../../App.css";
import { habitCategoryData } from "../../objects/habitCategory/habitCategoryData";
import Box from "@material-ui/core/Box";
import "../../screens/LoginPage/styles.css";
import "./styles.css"
import { TextField, Button, Grid, Typography, Container } from "@material-ui/core";
import habitCategoryObj from "../../objects/habitCategory/habitCategoryObject";
import axios from "axios";

export default function AddNewHabits(props) {
    const [habitCategory, sethabitCategory] = useState("");
    const [habit1, setHabit1] = useState("");
    const [habit2, setHabit2] = useState("");
    const [habit3, setHabit3] = useState("");
    const habitHandler = (e) => {
        props.setTrigger(false);
        // const newHabitObj = new habitCategoryObj(habitCategory, habit1, habit2, habit3);
        // habitCategoryData.push(newHabitObj);
        // console.log(habitCategoryData)
        let post = { name: habitCategory, habit1: habit1,habit2: habit2, habit3: habit3};
        //console.log(post);
        PostUpload(post);
      };
    
      const handleChange = (event) => {
        sethabitCategory(event.target.value);
      };
      const handleChange2 = (event) => {
        setHabit1(event.target.value);
      };
      const handleChange3 = (event) => {
        setHabit2(event.target.value);
      };
      const handleChange4 = (event) => {
        setHabit3(event.target.value);
      };
      const PostUpload = (habit) => {
        return axios
        .post("/habits/add", habit)
        .then((res) => console.log(res.data));
      }
      

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
            Add New Habit
          </Box>
        </Typography>
      </Grid>
      <Grid item xs={12} align="center">
        <TextField
          id="standard-multiline-static"
          variant="standard"
          label="Habit Category"
          onChange={handleChange}
          value={habitCategory}
        />
      </Grid>
      <Grid item xs={12} align="center">
        <TextField
         id="standard-multiline-static"
         variant="standard"
         label="Habit 1"
         onChange={handleChange2}
          value={habit1}
        />
      </Grid>
      <Grid item xs={12} align="center">
        <TextField
         id="standard-multiline-static"
         variant="standard"
         label="Habit 2"
         onChange={handleChange3}
          value={habit2}
        />
      </Grid>
      <Grid item xs={12} align="center">
        <TextField
         id="standard-multiline-static"
         variant="standard"
         label="Habit 3"
         onChange={handleChange4}
          value={habit3}
        />
      </Grid>
      <Grid item xs={12} align="center">
        <Button onClick={habitHandler} className="smallButton">Submit</Button>
      </Grid>
    </Grid>
    </Grid>
    </Container>
    

  ) : "";
}
