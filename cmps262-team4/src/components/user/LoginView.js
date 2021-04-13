import React, { useState } from "react";

export default function LoginView() {
  // only store username for demo purposes
  let [username, setUsername] = useState("");

  // login function to set user
  let login = (_) => {
    if (username === "") {
      return false;
    }
    // set username to signify we're logged in
    window.localStorage.setItem("username", username);
    // force redirect rather than React.Link so the web app can reload user info
    document.location = "/";
  };
  return (
    <>
      <div className="field">
        <p className="control has-icons-left has-icons-right">
          <input
            className="input"
            type="text"
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <span className="icon is-small is-left">
            <i className="fas fa-user" />
          </span>
        </p>
      </div>
      <div className="field">
        <p className="control has-icons-left">
          <input className="input" type="password" placeholder="Password" />
          <span className="icon is-small is-left">
            <i className="fas fa-lock" />
          </span>
        </p>
      </div>
      <div className="field">
        <p className="control">
          <button className="button is-success" onClick={login}>
            Login
          </button>
        </p>
      </div>
    </>
  );
}

LoginView.__TITLE__ = "Sign In";
