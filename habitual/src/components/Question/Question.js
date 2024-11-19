import React, { useState } from "react";
import "../../App.css";
import HabitCategory from "../HabitCategory";
import Footer from "../Footer";
import { habitCategoryData } from "../../objects/habitCategory/habitCategoryData";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import { quizQuestions } from "../../objects/questions/questionsData";
import { Button } from "@material-ui/core";

export default function Question(props) {
  const [options, setOptions] = useState(props.options);
  return (
    <div className="App">
      <header className="App-header">
        <Container maxWidth="lg">
          <Typography component="div" className="mt-6">
            <Box
              sx={{
                textAlign: "left",
                fontSize: 44,
                lineHeight: "1.75em",
                fontWeight: 500,
              }}
              onclick
            >
              {props.questionName}
            </Box>
          </Typography>
        </Container>
      </header>
      {options.map((question) => {
        return <HabitCategory name={question} />;
      })}
      <Button
        className="mainButton"
        variant="outlined"
      >
        Submit
      </Button>

      <Footer />
    </div>
  );
}
