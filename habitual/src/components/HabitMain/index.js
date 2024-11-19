import "../../App.css";
import "./styles.css";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import { Link } from "react-router-dom";
import UserHabits from "../UserHabits";
import React, { useState, useEffect, useContext } from "react";
import { UserContext } from "../../contexts/UserContext";

import axios from "axios";

export default function HabitMain() {
  const [isLoading, setLoading] = useState(true);

  const [cloudData, setCloudData] = useState(null);
  const { name, setName, user, setUser, userId, setUserId } =
  useContext(UserContext);
  
  useEffect(() => {
    axios
      .get("/users/getUsers/" + userId)
      .then((response) => {
          // console.log("hereooo");
          // console.log(response);
          setCloudData(response.data.selectedHabits);
          if (cloudData != []) {
            setLoading(false);
          }
      })
      .catch((error) => {
        console.log(error);
      });
  }, [cloudData]);
  return (
    <Container maxWidth="lg">
      <Grid container spacing={4}>
        <Grid item xs={12} sm={5} md={4} lg={4} xl={4}>
          <Button
          to="/habits"
          component={Link}
          className="button-page">  
          <Container className="button-padding posts-background lighter-shadow side-height">
            <Grid container direction="column"
            justifyContent="space-between"
            alignItems="flex-end">
              <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                <ArrowForwardIcon />
              </Grid>
              <Grid item xs={12} sm={12} md={12} lg={12} xl={12} >
                <Typography component="div">
                  <Box sx={{ textAlign: "left", fontSize: 27, fontWeight: 500 }}>
                    Checkout the habits gallery
                  </Box>
                </Typography>
              </Grid>
            </Grid>
          </Container>
          </Button>
        </Grid>
        <Grid item xs={12} sm={7} md={8} lg={8} xl={8}>
            {/* Add table here */}
            <Typography component="div">
                <Box sx={{ textAlign: "left", fontSize: 35, fontWeight: 500, mb: 2, ml: 3 }}>
                  Your Habits
                </Box>
              </Typography>
              {isLoading ? (
              <div></div>
            ) : (
              <Container>
        {cloudData.map((post) => {  
      return (
        <UserHabits
        habit = {post.habit}
        id = {post._id}
        />
      );
    })}
    </Container>
    )}
          
          </Grid>
      </Grid>
    </Container>
  );
}
