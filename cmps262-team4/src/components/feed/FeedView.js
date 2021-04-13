import React, { useEffect, useState } from "react";
import { MOCK_POST_COUNT, util } from "../Util";
import { name, lorem } from "faker";
import Post from "./Post";

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

        mockPosts.sort((a, b) => b.date - a.date);
        setPosts(mockPosts);
    }, []);
  return (
    <>
      {posts &&
        posts.map((post, key) => {
          return <Post post={post} key={key} />;
        })}
    </>
  );
}
FeedView.__TITLE__ = "Feed";
