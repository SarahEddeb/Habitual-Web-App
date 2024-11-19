import "../../App.css";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import "./styles.css";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import userz, { userData } from "../../objects/users/usersObj";
import User from "../User/User";
import AddNewUser from "../AddNewUser/AddNewUser";
import React, { useState, useEffect, useContext } from "react";
import { UserContext } from "../../contexts/UserContext";

import axios from "axios";
export default function AssessMain() {
  const [cloudData, setCloudData] = useState(null);
  const [isLoading, setLoading] = useState(true);

  const { name, setName, user, setUser, userId, setUserId } =
  useContext(UserContext);
  // const [user, setUser] = useState(userData);
  const [addUser, setaddUser] = useState(false);
  // const removeUser = (value) => {
  //   console.log(user);
  //   user.splice(value, 1);
  //   console.log(user);
  //   setUser([...user]);
  // };

  useEffect(() => {
    axios
      .get("/users/")
      .then((response) => {
          // console.log("hereooo");
          // console.log(response);
          // console.log(response.data.selectedHabits );
          setCloudData(response.data);
          console.log('Data Here Look')
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
      <Grid container spacing={3}>
        <Grid item xs={12} sm={4} md={4} lg={4} xl={4}>
          <Button onClick={() => setaddUser(true)} className="button-page">
            <Container 
            // onClick={() => {
            //             user.unshift(new userz("New User", "@newuser"));
            //             setUser([...user])
            //           }} 
                      className="write-padding posts-background lighter-shadow side-height">
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
                      Add a new user
                    </Box>
                  </Typography>
                </Grid>
              </Grid>
            </Container>
          </Button>
        </Grid>

        <Grid item xs={12} sm={12} md={8} lg={8} xl={8}>
          <h3> Users</h3>
          <Table className="assessment-list">
          {isLoading ? (
              <div></div>
            ) : (
            <TableBody>
              {cloudData.map((user, index) => {
                return (
                  <User
                    unique={index}
                    name={user.name}
                    handle={user.username}
                    id = {user._id}
                  />
                );
              })}
            </TableBody>
            )}
          </Table>
        </Grid>
      </Grid>
      <AddNewUser trigger = {addUser} setTrigger = {setaddUser}>
      setHabits([...habits]);
        
      </AddNewUser>
    </Container>
  );
}
