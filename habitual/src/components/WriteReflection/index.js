import React, { useLayoutEffect, useState, useContext } from "react";
import "../../App.css";
import "./styles.css";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import axios from "axios";
import TextField from "@material-ui/core/TextField";
import communityPostObj from "../../objects/communityPost/communityPostObject";
import { UserContext } from "../../contexts/UserContext";
/* import FormControl from '@material-ui/core/FormControl';
 */
/* const useStyles = makeStyles(() => ({
  inputMultiline : {
    "& .MuiInputBase-input" : {
        height : '100vh', //here add height of your container
      },
  }

})); */

function WriteReflection({ AddPost, data, category }) {
  // This needs to be rendered while we change the size of the screen
  // How can we do that?
  //const { data, category } = props;

  const { name, setName, user, setUser, userId, setUserId } =
    useContext(UserContext);

  const [dataPost, setPostData] = useState(data);
  const [postTitle, setPostTitle] = useState("");
  const [postContent, setContent] = useState("");
  function useWindowSize() {
    const [numOfRows, setNumOfRows] = useState(1);

    useLayoutEffect(() => {
      function updateSize() {
        if (window.innerHeight <= 912 && window.innerWidth >= 960) {
          setNumOfRows(15);
        } else {
          /*  else if (window.innerWidth >=960 ){
          setNumOfRows(29)
        } */
          setNumOfRows(5);
        }
      }
      console.log(window.innerHeight);
      window.addEventListener("resize", updateSize);
      updateSize();
      return () => window.removeEventListener("resize", updateSize);
    }, []);
    return numOfRows;
  }
  const handleChange = (event) => {
    setContent(event.target.value);
  };

  const handleChange2 = (event) => {
    setPostTitle(event.target.value);
  };

  const PostUpload = (post) => {
    return axios
      .post("/posts/add", post)
      .then((res) => console.log(res.data));
  };
  const submitHandler = (e) => {
    let post = {
      title: postTitle,
      username: user,
      postContent: postContent,
      category: category,
      private: false
    };
    //console.log(post);
    PostUpload(post);
    //console.log("got here");
    AddPost(dataPost);
    setContent("");
    setPostTitle("");
  };
  const submitHandler2 = (e) => {
    let post = {
      title: postTitle,
      username: user,
      postContent: postContent,
      category: category,
      private: true,
    };
    //console.log(post);
    PostUpload(post);
    //console.log("got here");
    AddPost(dataPost);
    setContent("");
    setPostTitle("");
  };
  
  //console.log(postContent, postTitle, category);
  return (
    <Container className="write-padding posts-background lighter-shadow">
      <Typography component="div">
        <Box sx={{ textAlign: "left", fontSize: 27, fontWeight: 500 }}>
          Write Reflection
        </Box>
        <Box sx={{ textAlign: "left", mb: 3 }}>
          <TextField
            id="standard-multiline-static"
            fullWidth
            rows={1}
            variant="standard"
            placeholder="Add Title"
            type="required"
            onChange={handleChange2}
            value={postTitle}
          />
          <TextField
            id="standard-multiline-static"
            fullWidth
            multiline
            rows={useWindowSize()}
            variant="standard"
            placeholder="Start writing your reflection here... "
            onChange={handleChange}
            value={postContent}
          />
        </Box>
      </Typography>
      <Grid container className="buttons-position">
        <Grid item xs>
          <Button className="smallerButton" variant="outlined" onClick={submitHandler2}>
            Keep Private
          </Button>
        </Grid>
        <Grid
          item
          direction="column"
          alignItems="flex-end"
          justifyContent="flex-end"
        >
          <Button
            className="smallerButton"
            variant="outlined"
            onClick={submitHandler}
          >
            Share
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
}
export default WriteReflection;