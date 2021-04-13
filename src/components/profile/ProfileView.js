import React from "react";
import { lorem } from "faker";
import FeedView from "../feed/FeedView";

export default function ProfileView({ id }) {
  return (
    <div className="tile is-ancestor">
      <div className="tile is-4 is-vertical is-parent">
        <div className="tile is-child box">
          <p className="image">
            <img
              src="https://via.placeholder.com/256x256"
              style={{ borderRadius: "10px" }}
            />
          </p>
          <hr />
          <p className="title">{id}</p>
          <p className="subtitle is-7">{lorem.words(10)}</p>
          <div className="buttons is-grouped">
            <div className="control">
              <button className="button">Follow</button>
              <button className="button is-danger">Block</button>
            </div>
          </div>
        </div>
      </div>
      <div className="tile is-parent">
        <div className="tile is-child box">
          <p className="title">Wall</p>
          <FeedView limit={5} />
        </div>
      </div>
    </div>
  );
}
