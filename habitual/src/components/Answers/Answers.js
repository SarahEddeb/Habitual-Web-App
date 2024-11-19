import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";


import React, { useState } from "react";
import "../../App.css";
import "./styles.css"

export default function Answers(props) {
  const [factor, setFactor] = useState(props.id)

  const [option, setOption] = useState(true);
  const [stress, setStress] = useState(false);
  const [time, setTime] = useState(false);

  const submitHandler = (e) => {
    //console.log("got here");
    props.onClickz(props.id);
  };
  return (
    <Container>
      {/* Category collapsed */}
      <Container maxWidth="lg" className="mt-4">
        <Container className="border habit-edge mb-posts hover-answer">
          <Box onClick={submitHandler} sx={{ display: "flex", justifyContent: "center" }}>
            <Box>
              <Typography component="div">
                <Box sx={{ textAlign: "left", fontSize: 22, fontWeight: 500 }}>
                  {props.name}
                </Box>
              </Typography>
            </Box>
          </Box>
        </Container>
      </Container>
    </Container>
  );
}
