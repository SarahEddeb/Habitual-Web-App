import React from 'react';
import '../../App.css';
import '../CommunityPost/styles.css';
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container'
import FavoriteIcon from '@material-ui/icons/Favorite';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import axios from "axios";

export default function CommunityPost(props) {
  const submitHandler = (e) => {
    // props.removePost(props.unique)
    let post = { id: props.postID};
    console.log(props.postID)
    DeletePost(post)
  };
  const DeletePost = (post) => {
    return axios
    .delete("/posts/:id", {data: post})
    .then((res) => console.log(res.data));
  }
  return (
    <Container className="border round-edge post-padding mb-posts">
      <Typography component="div">
        <Box sx={{ textAlign: 'left', fontSize: 35, fontWeight: 500, ml: 1 }}>
          {props.name}
        </Box>
        <Box sx={{ textAlign: 'left', typography: 'subtitle2', ml: 1, mb: 2 }}>
          @{props.userHandle}
        </Box>
        <Box sx={{ textAlign: 'left', m: 1, mb: 3 }}>
          {props.postContent}
        </Box>
      </Typography>
      <Button
        onClick={submitHandler}
        className="smallButton"
        variant="outlined"
      >
        Remove Post
      </Button>

      <Box maxWidth="100%" className="color" sx={{ alignItems: 'flex-end' }}>
        <Button
          className="smallerButton"
          variant="none"
          startIcon={<FavoriteIcon color="secondary" />}
        >
          Support
        </Button>
        <Button
          className="smallerButton"
          variant="none"
          startIcon={<ChatBubbleIcon />}
        >
          Comment
        </Button>
{/* 
        {props.comments.map((comment) => {
          console.log(comment)
          return (
            <Comments
              name={comment.name}
              handle={comment.handle}
              comment={comment.comment}
            />
          );
        })} */}

      </Box>
    </Container>
  );
}
