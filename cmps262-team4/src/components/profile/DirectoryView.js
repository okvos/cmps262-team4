import React, { useState, useEffect } from "react";
import { lorem, name } from "faker";
import Moment from "react-moment";
import { Link } from "react-router-dom";

export default function DirectoryView() {
  let [users, setUsers] = useState([]);
  useEffect((_) => {
    let randomUsers = [];
    for (let count = 0; count < 25; count++) {
      let mockName = name.findName();
      let username = mockName.toLowerCase().split(" ").join("-");
      randomUsers.push([mockName, username]);
    }
    setUsers(randomUsers);
  }, []);
  return (
    <div>
      {users.map((user, k) => (
        <article className="media" key={k}>
          <figure className="media-left">
            <p className="image is-64x64">
              <img src="https://via.placeholder.com/128x128" />
            </p>
          </figure>
          <div className="media-content">
            <div className="content">
              <p>
                <strong>{user[0]}</strong>{" "}
                <Link to={`/profiles/${user[1]}`}>
                  <small>@{user[1]}</small>
                </Link>{" "}
                <br />
                {lorem.words(5)}
              </p>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
