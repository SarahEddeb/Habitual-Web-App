import React, { useState, useEffect, useContext } from "react";
import "../../App.css";
import "./styles.css";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import { Grid, IconButton } from "@material-ui/core";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import axios from "axios";
import { UserContext } from "../../contexts/UserContext";

export default function HabitCategory(props) {
  const [userID, setUserID] = useState("");
  const { name, setName, user, setUser, userId, setUserId } =
  useContext(UserContext);

  const AddHabit = (habit) => {
    return axios
    .post("/users/addHabit/" + userId, habit)
    .then((res) => console.log(res));
  }
  // useEffect(() => {
  //   axios
  //     .get("http://localhost:5000/users/login")
  //     .then((response) => {
  //         // console.log("hereooo");
  //         // console.log(response);
  //         setUserID(response.data.id);
          
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }, [userID]);
  
  const submitHandler1 = (e) => {
      // Retrieve userID
      const habit = { habit: props.habit1};
      console.log('This is props.id' + habit);
      console.log('Hello right here' + typeof(props.habit1));
      console.log(typeof(props.habit1));
      AddHabit(habit)
    };
    const submitHandler2 = (e) => {
      // props.removeUser(props.unique)
      let habit = { habit: props.habit2};

      AddHabit(habit)
    };
    const submitHandler3 = (e) => {
      // props.removeUser(props.unique)
      let habit = { habit: props.habit3};

      AddHabit(habit)
    };
    
  const [show, setShow] = useState(false);
  return (
    <Container>
      {/* Category collapsed */}
      <Container maxWidth="lg" className="mt-4">
        <Container className="border habit-edge mb-posts">
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Box>
              <Typography component="div">
                <Box sx={{ textAlign: "left", fontSize: 22, fontWeight: 500 }}>
                  {props.name}
                </Box>
              </Typography>
            </Box>
            <Box>
              <IconButton
                onClick={() => {
                  setShow(!show);
                }}
                aria-label="expand"
                className="icon-color"
              >
                {!show ? (
                  <ArrowDownwardIcon fontSize="small" />
                ) : (
                  <ArrowUpwardIcon fontSize="small" />
                )}
              </IconButton>
            </Box>
          </Box>
          <div style={{ display: show ? "block" : "none" }}>
            <Grid
              container
              sx={{ flexGrow: 1 }}
              spacing={4}
              justifyContent="center"
              className="expanded-padding"
            >
              <Grid item md={3}>
                <Grid
                  container
                  direction="column"
                  justifyContent="center"
                  alignItems="center"
                >
                  <img
                    className="habit-img"
                    src="https://images.unsplash.com/photo-1548783352-782f2ad6bedc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=987&q=80"
                    alt=""
                  />
                  <Typography component="div">
                    <Box
                      sx={{
                        textAlign: "center",
                        typography: "body",
                        mb: 1,
                        mt: 2,
                      }}
                    >
                      {props.habit1}
                    </Box>
                  </Typography>
                  <Button onClick={submitHandler1} className="smallerButton" variant="outlined">
                    Add
                  </Button>
                </Grid>
              </Grid>
              <Grid item md={3}>
                <Grid
                  container
                  direction="column"
                  justifyContent="center"
                  alignItems="center"
                >
                  <img
                    className="habit-img"
                    src="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1975&q=80"
                    alt=""
                  />
                  <Typography component="div">
                    <Box
                      sx={{
                        textAlign: "center",
                        typography: "body",
                        mb: 1,
                        mt: 2,
                      }}
                    >
                      {props.habit2}
                    </Box>
                  </Typography>
                  <Button onClick={submitHandler2} className="smallerButton" variant="outlined">
                    Add
                  </Button>
                </Grid>
              </Grid>
              <Grid item md={3}>
                <Grid
                  container
                  direction="column"
                  justifyContent="center"
                  alignItems="center"
                >
                  <img
                    className="habit-img"
                    src="https://images.unsplash.com/photo-1555412654-72a95a495858?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=987&q=80"
                    alt=""
                  />
                  <Typography component="div">
                    <Box
                      sx={{
                        textAlign: "center",
                        typography: "body",
                        mb: 1,
                        mt: 2,
                      }}
                    >
                      {props.habit3}
                    </Box>
                  </Typography>
                  <Button onClick={submitHandler3} className="smallerButton" variant="outlined">
                    Add
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </div>
        </Container>
      </Container>
    </Container>
  );
}
