import "../../App.css";
import React, { useState, useEffect } from "react";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import "./styles.css";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Habitss from "../HabitsRender/Habitss";
import AddNewHabits from "../AddNewHabits/AddNewHabits";
import "../../screens/LoginPage/styles.css";
import { habitCategoryData } from "../../objects/habitCategory/habitCategoryData";
import axios from "axios";

export default function AssessMain() {
  const [habits, setHabits] = useState(habitCategoryData);
  const [addHabit, setaddHabit] = useState(false);
  const [cloudData, setCloudData] = useState(null);
  const [isLoading, setLoading] = useState(true);

  // const removeUser = (value) => {
  //   habits.splice(value, 1);
  //   setHabits([...habits]);
  //   // console.log(habitCategoryData)

  // };
  // const AddHabit = (data) => {
  //   //console.log("yello");
  //   //console.log(data);
  //   setData({ ...data });
  //   //console.log("after");
  //   //console.log(postData);
  // };
  useEffect(() => {
    /* 
    let didCancel = false;
    async function getCloudData() {
      if (!didCancel) {
        let response = await fetch("http://localhost:5000/posts/");
        let data = await response.json();
        console.log("useeffect");
        console.log(data);
        setCloudData(data);
        setLoading(false);
      }
    }
    getCloudData();
       */

    axios
      .get("/habits/")
      .then((response) => {
        if (response.data.length > 0) {
          // console.log("hereooo");
          // console.log(response);
          setCloudData(response.data);
          //console.log(cloudData);
          if (cloudData != []) {
            setLoading(false);
          }
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, [cloudData]);
  return (
    <Container maxWidth="s">
      <Grid container spacing={3}>
        <Grid item xs={12} sm={4} md={4} lg={4} xl={4}>
          <Button onClick={() => setaddHabit(true)} className="button-page">
            <Container
              // onClick={() => {
              //   habits.unshift("newHabit");
              //   setHabits([...habits]);
              // }}

              className="write-padding posts-background lighter-shadow side-height"
            >
              <Grid
                container
                direction="column"
                justifyContent="space-between"
                alignItems="flex-end"
              >
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                  <ArrowForwardIcon />
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                  <Typography component="div">
                    <Box
                      sx={{ textAlign: "left", fontSize: 27, fontWeight: 500 }}
                    >
                      Add a new habit
                    </Box>
                  </Typography>
                </Grid>
              </Grid>
            </Container>            
          </Button>
        </Grid>
        
        <Grid item xs={12} sm={12} md={8} lg={8} xl={8}>
          <h3> Habits</h3>
          <Table className="assessment-list">
            {isLoading ? (
              <div></div>
            ) : (
              <TableBody>
              {cloudData.map((post, index) => {
          return (
            <Habitss
              id = {post._id}
              habit={post.name}
              habit1={post.habit1}
              habit2={post.habit2}
              habit3={post.habit3}
              unique={index}
              />
          );
        })}
        </TableBody>
        )}
          </Table>
        </Grid>
      </Grid>
      <AddNewHabits trigger = {addHabit} setTrigger = {setaddHabit}>
      setHabits([...habits]);
        
      </AddNewHabits>
    </Container>
    
  );
}
