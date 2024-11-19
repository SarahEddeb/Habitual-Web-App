import "../../App.css";
//import React from "react";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import "./styles.css";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import { Link } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import React, { useState, useEffect, useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import axios from "axios";

export default function AssessMain() {
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
          let x = response.data.assessments;
          x = x.reverse();
          setCloudData(x);
          //console.log(response.data.assessments );
          //setCloudData(response.data.assessments);
          //console.log('Data Here Look')
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
        to="/selfassessmentquiz"
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
                  Take your weekly self assessment
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
                Your Previous Assessments
              </Box>
            </Typography>
            <Container>
        <Table className="assessment-list">
            
              {isLoading ? (
                <div></div>
              ) : (
                <TableBody>
                  {cloudData.map((assess) => {  
                  return (
                    <TableRow>
                      <TableCell component="th" scope="row" align="left">
                        {assess.date}
                      </TableCell>
                      <TableCell component="th" scope="row" align="right">
                        {assess.result}
                      </TableCell>
                    </TableRow>
                  );
                })}
                </TableBody>
              )}
          </Table>
      </Container>
        
      </Grid>
    </Grid>
  </Container>
  );
}
