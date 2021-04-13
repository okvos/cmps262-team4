import React, { useEffect, useState } from "react";
import { MOCK_POST_COUNT, util } from "../Util";
import { name, lorem } from "faker";
import Post from "./Post";
import CreatePost from "./CreatePost";

export default function FeedView() {
  const [posts, setPosts] = useState(null);
  useEffect((_) => {
    // normally request posts from server
    // create fake posts for now as there is no server/db
    // fetchPosts = async _ => { }; await fetchPosts();

    let mockPosts = [];
    for (let i = 0; i <= MOCK_POST_COUNT; i++) {
      //let name = util.generateFakeName();
      let mockName = name.findName();
      let username = mockName.toLowerCase().split(" ").join("-");

      let wordCount = Math.floor(Math.random() * 50) + 5;
      let text = lorem.words(wordCount);
      let date = new Date();
      if (i >= date.getMinutes()) date.setHours(date.getHours() - 1);
      date.setMinutes(i);

      mockPosts.push({
        id: wordCount,
        author: {
          name: mockName,
          username: username,
        },
        text: text,
        date: date,
      });
    }

    // add my posts if i'm logged in
    if (util.isLoggedIn()) {
      let myPosts = window.localStorage.getItem("posts");
      if (myPosts) {
        myPosts = JSON.parse(myPosts);
        for (let post of myPosts) {
          mockPosts.push({
            id: Math.floor(Math.random() * 50) + 5,
            author: {
              name: util.username,
              username: util.username,
            },
            text: post.text,
            date: new Date(post.date),
          });
        }
      }
    }

    setPosts(mockPosts);
  }, []);
  return (
    <>
      {util.isLoggedIn() === true && (
        <>
          <CreatePost />
          <hr />
        </>
      )}
      {posts &&
        posts.map((post, key) => {
          return <Post post={post} key={key} />;
        })}
    </>
  );
}
FeedView.__TITLE__ = "Feed";
