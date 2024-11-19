import "../../App.css";
import "./styles.css"
import CommunityPost from "../CommunityPostAdmin";
import { communityPostData } from "../../objects/communityPost/communityPostData";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import axios from "axios";
import React, { useState, useEffect } from "react";

export default function ReflectMain() {
  const [postData, setPostData] = useState(communityPostData);
  const [category, setCategory] = useState("TRENDING");
  const [trending, setTrending] = useState(true);
  const [stress, setStress] = useState(false);
  const [time, setTime] = useState(false);
  const [cloudData, setCloudData] = useState(null);
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {

    axios
      .get("/posts/")
      .then((response) => {
        if (response.data.length > 0) {
          //console.log("hereooo");
          //console.log(response);
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
      <Container maxWidth="lg">
        <Grid container spacing = {3}>
              <Grid item xs={12} sm={4} md={4} lg={4} xl={4}>
                <Grid item className = "button">
                  <Button
                    className="mainButton"
                    variant="outlined"
                    style={{ display: trending ? "none" : "block" }}
                    onClick={() => {
                      setCategory("TRENDING");
                      setTrending(true);
                      setStress(false);
                      setTime(false);
                    }}
                  >
                    Trending
                  </Button>
                  <Button
                    className="mainButtonInverted"
                    variant="outlined"
                    style={{ display: trending ? "block" : "none" }}
                    onClick={() => {
                      setCategory("TRENDING");
                      setTrending(true);
                      setStress(false);
                      setTime(false);
                    }}
                  >
                    Trending
                  </Button>
                </Grid>
                <Grid item className = "button">
                  <Button
                    className="mainButton"
                    variant="outlined"
                    style={{ display: stress ? "none" : "block" }}
                    onClick={() => {
                      setCategory("STRESS");
                      setTrending(false);
                      setStress(true);
                      setTime(false);
                    }}
                  >
                    Stress
                  </Button>
                  <Button
                    className="mainButtonInverted"
                    variant="outlined"
                    style={{ display: stress ? "block" : "none" }}
                    onClick={() => {
                      setCategory("STRESS");
                      setTrending(false);
                      setStress(true);
                      setTime(false);
                    }}
                  >
                    Stress
                  </Button>
                </Grid>
                <Grid item className = "button">
                  <Button
                    className="mainButton"
                    variant="outlined"
                    style={{ display: time ? "none" : "block" }}
                    onClick={() => {
                      setCategory("TIME");
                      setTrending(false);
                      setStress(false);
                      setTime(true);
                    }}
                  >
                    Time Management
                  </Button>
                  <Button
                    className="mainButtonInverted"
                    variant="outlined"
                    style={{ display: time ? "block" : "none" }}
                    onClick={() => {
                      setCategory("TIME");
                      setTrending(false);
                      setStress(false);
                      setTime(true);
                    }}
                  >
                    Time Management
                  </Button>
                </Grid>
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
                  //console.log(cloudData);
                  if (post.category == category) {
                    return (
                      <CommunityPost
                        postID={post._id}
                        name={post.title}
                        userHandle={post.username}
                        postContent={post.postContent}
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