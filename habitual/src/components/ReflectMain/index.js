import React, { useState, useEffect, useContext } from "react";
import "../../App.css";
import CommunityPost from "../CommunityPost";
import WriteReflection from "../WriteReflection";
import { communityPostData } from "../../objects/communityPost/communityPostData";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import axios from "axios";
import { UserContext } from "../../contexts/UserContext";

export default function ReflectMain() {
  const [postData, setPostData] = useState(communityPostData);
  const [trending, setTrending] = useState(true);
  const [stress, setStress] = useState(false);
  const [time, setTime] = useState(false);
  const [cloudData, setCloudData] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const [cate, setCate] = useState(["TRENDING", "STRESS", "TIME"]);

  const AddPost = (data) => {
    setPostData({ ...data });
  };
  const { user, setUser, userId } = useContext(UserContext);

  useEffect(() => {

    axios
      .get("/posts/")
      .then((response) => {
        if (response.data.length > 0) {
          //console.log("hereooo");
          //console.log(response);
          let x = response.data;
          x = x.reverse();
          setCloudData(x);
          //let x = cloudData.reverse();
          //setCloudData(x);
          //console.log(cloudData);
          if (cloudData != []) {
            setLoading(false);
          }
        }
      })
      .catch((error) => {
        console.log(error);
      });
  });
  return (
    <Container maxWidth="lg">
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
          <WriteReflection
            AddPost={AddPost}
            data={postData}
            category={"TRENDING"}
          />
        </Grid>
        {isLoading ? (
          <div></div>
        ) : (
          <Grid item xs={12} sm={12} md={8} lg={8} xl={8}>
            {cloudData.map((post) => {
              //console.log(post._id);
              //console.log(typeof post._id);
              //console.log("iterate")
              //console.log(postData)
              // comments={post.comments}
              // likedUsers={post.userLiked}
              //console.log("got heree");
              //console.log(isLoading);
              //console.log(cloudData);)

              //console.log(user ==)
              if (user == post.username && post.private == true) {
                return (
                  <CommunityPost
                    postID={post._id}
                    name={post.title}
                    userHandle={post.username}
                    postContent={post.postContent}
                    comments={post.comments}
                    usersLiked={post.usersLiked}
                    isPrivate={true}
                  />
                );
              } else if (user == post.username && post.private == false) {
                return (
                  <CommunityPost
                    postID={post._id}
                    name={post.title}
                    userHandle={post.username}
                    postContent={post.postContent}
                    comments={post.comments}
                    usersLiked={post.usersLiked}
                    isPrivate={false}
                  />
                );
              }
            })}
          </Grid>
        )}
      </Grid>
    </Container>
  );
}
