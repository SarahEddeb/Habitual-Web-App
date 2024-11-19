import "../../App.css";
import "../HabitMain/styles.css";
import React, { useState, useEffect, useContext } from "react";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import { Link } from "react-router-dom";
import { UserContext } from "../../contexts/UserContext";
import axios from "axios";
import {TableCell, TableRow } from "@material-ui/core";

export default function UserHabits(props) {
  const { name, setName, user, setUser, userId, setUserId } = useContext(UserContext);
  const submitHandler = (e) => {
    // props.removePost(props.unique)
    let habit = { id: props.habit};
    console.log('This is habit ID' + props.id);
    DeleteHabit(habit)
  };
  const DeleteHabit = (post) => {
    return axios
    .delete("/users/" + userId + "/" + props.id)
    .then((res) => console.log(res.data));
  }

    return (
        
          <Container className="border habit-edge mb-posts">
            <Grid container maxWidth="100%" item > 
              <Grid Item xs={9} className="padding-habit">
                {props.habit}
              </Grid>
              <Grid Item xs={3}> 
                <Button onClick={submitHandler} className="mainButton">Remove</Button>
              </Grid>
            </Grid>
          </Container>
        
    );
}