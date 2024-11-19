import React, { useEffect, useState, useContext } from "react";
import "../../App.css";
import "./styles.css";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ChatBubbleIcon from "@material-ui/icons/ChatBubble";
import Comments from "../Comments/index";
import TextField from "@material-ui/core/TextField";
import SendIcon from "@material-ui/icons//Send";
import { IconButton } from "@material-ui/core";
import { pink, grey } from "@material-ui/core/colors";
import axios from "axios";
import { UserContext } from "../../contexts/UserContext";

export default function CommunityPost(props) {
  const [commentData, setComment] = useState("");
  const [showComments, setShowComments] = useState(false);
  const [isLiked, setLiked] = useState(false);

  const { name, setName, user, setUser, userId, setUserId } =
    useContext(UserContext);
  const handleChange = (event) => {
    setComment(event.target.value);
  };
  const handleClick = () => {
    setShowComments(!showComments);
  };
  const handleClick2 = () => {
    setLiked(!isLiked);
    console.log(isLiked);

    if (isLiked) {
      props.likedUsers.push(props.name); // adding the wrong user
    } else {
      props.likedUsers.pop();
    }
    console.log(props.likedUsers);
  };
  const commentUpload = (comment) => {
    //console.log(props.postID);
    return axios
      .post("/posts/comment/" + props.postID, comment)
      .then((res) => console.log(res.data));
  };
  const handleClicked3 = () => {
    let comment = {
      comments: { username: user, comment: commentData },
    };
    //console.log(comment);
    commentUpload(comment);
    setComment("");
  };

  const handleClick5 = () => {
    setLiked(!isLiked);
    return axios
      .post("/posts/like/" + props.postID, {
        username: user,
      })
      .then((res) => {
        console.log(res.data);
      });
  };

  useEffect(() => {
  });

  return (
    <Container className="border round-edge post-padding mb-posts">
      <Typography component="div">
        <Box sx={{ textAlign: "left", fontSize: 35, fontWeight: 500, ml: 1 }}>
          {props.name}
        </Box>
        <Box sx={{ textAlign: "left", typography: "subtitle2", ml: 1, mb: 2 }}>
          @{props.userHandle}
        </Box>
        {props.isPrivate ? (
          <Button className="smallerButtonCP" variant="outlined" color="white">
            Private
          </Button>
        ) : (
          <></>
        )}

        <Box sx={{ textAlign: "left", m: 1, mb: 3 }}>{props.postContent}</Box>
      </Typography>

      <Box
        maxWidth="100%"
        className="color"
        sx={{ alignItems: "flex-end", mb: 3 }}
      >
        <Button
          className="smallerButton"
          variant="none"
          onClick={handleClick5}
          startIcon={
              <FavoriteIcon
              style={{
                color: props.usersLiked.some((userz) => userz.username == user)
                  ? pink[500]
                  : grey[400],
              }}
            />
          } // Applied to component so it shows up on other category pages
        >
          Support
        </Button>
        <Button
          className="smallerButton"
          variant="none"
          startIcon={<ChatBubbleIcon />}
          onClick={handleClick}
        >
          Comments
        </Button>
      </Box>
      {showComments ? (
        <div>
          {props.comments === [] ? (
            <></>
          ) : (
            // <Container>
            // </Container>
            props.comments.map((comment) => {
              console.log(comment);
              return (
                <Comments handle={comment.username} comment={comment.comment} />
              );
            })
          )}

          <Box maxWidth="100%" sx={{ ml: 1, mb: 4 }}>
            <TextField
              id="standard-basic"
              variant="standard"
              label="Comment"
              placeholder="Share your thoughts"
              style={{ width: "85%" }}
              value={commentData}
              onChange={handleChange}
            />
            <IconButton
              className="share-pos"
              color="primary"
              onClick={handleClicked3}
            >
              <SendIcon fontSize="small" className="icon" />
            </IconButton>
          </Box>
        </div>
      ) : (
        <></>
      )}
    </Container>
  );
}