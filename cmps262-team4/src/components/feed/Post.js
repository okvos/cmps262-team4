import React from "react";
import Moment from "react-moment";
import { util } from "../Util";

export default function Post({ post }) {
  return (
    <article className="media">
      <figure className="media-left">
        <p className="image is-64x64">
          <img src="https://via.placeholder.com/128x128" />
        </p>
      </figure>
      <div className="media-content">
        <div className="content">
          <p>
            <strong>{post.author.name}</strong>{" "}
            <small>@{post.author.username}</small> &mdash;{" "}
            <small>
              <Moment fromNow withTitle>
                {post.date}
              </Moment>
            </small>
            <br />
            {post.text}
          </p>
        </div>
        {util.isLoggedIn() === true && (
          <nav className="level is-mobile">
            <div className="level-left">
              <a className="level-item">
                <span className="icon is-small">
                  <i className="fa fa-reply"></i>
                </span>
              </a>
              <a className="level-item">
                <span className="icon is-small">
                  <i className="fa fa-retweet"></i>
                </span>
              </a>
              <a className="level-item">
                <span className="icon is-small">
                  <i className="fa fa-heart"></i>
                </span>
              </a>
            </div>
          </nav>
        )}
      </div>
    </article>
  );
}
