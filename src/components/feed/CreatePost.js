import React, { useState } from "react";

export default function CreatePost() {
  let [text, setText] = useState("");
  let create = (_) => {
    // load my local posts, parse them
    let posts = window.localStorage.getItem("posts");
    if (!posts) {
      posts = [];
    } else posts = JSON.parse(posts);

    // add this post to the posts and then re-save local storage
    posts.push({
      date: new Date().getTime(),
      text: text,
    });

    if (posts.length > 10) {
      posts = posts.slice(Math.max(posts.length - 10, 0));
    }

    window.localStorage.setItem("posts", JSON.stringify(posts));
    // window.location.reload(); // refresh to reload local storage
    // redirect to homepage since jail doesn't play well with react
    document.location = "/cmps262-team4/build";
  };
  return (
    <div>
      <div className="field">
        <label className="label">Create new post</label>
        <div className="control">
          <textarea
            className="textarea"
            rows={2}
            placeholder="What's on your mind?"
            onChange={(e) => setText(e.target.value)}
          />
        </div>
      </div>
      <div className="field is-grouped is-grouped-right">
        <div className="control">
          <button className="button is-link" onClick={create}>
            Share
          </button>
        </div>
      </div>
    </div>
  );
}
