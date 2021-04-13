import React, { useState, useEffect } from "react";
import "./CreateView.css";

export default function CreateView() {
  let [userIsAvailable, setUserIsAvailable] = useState(null);
  let [username, setUsername] = useState("");

  // bool if account has been created or not to show success
  let [accountCreated, setAccountCreated] = useState(false);

  // current creation step
  let [currentStep, setCurrentStep] = useState(1);

  // check if username is available as user types it
  useEffect(
    (_) => {
      if (username === "") setUserIsAvailable(null);
      else {
        let isAvail = Math.random() < 0.5; // random instead of server-side callback
        setUserIsAvailable(isAvail);
      }
    },
    [username]
  );
  return (
    <>
      {accountCreated === true && (
        <>
          <div className="success-animation">
            <svg
              className="checkmark"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 52 52"
            >
              <circle
                className="checkmark__circle"
                cx="26"
                cy="26"
                r="25"
                fill="none"
              />
              <path
                className="checkmark__check"
                fill="none"
                d="M14.1 27.2l7.1 7.2 16.7-16.8"
              />
            </svg>
          </div>
          <h1 className="title has-text-centered">Success</h1>
          <h1 className="subittle has-text-centered">
            Your account has been created
          </h1>
        </>
      )}
      {accountCreated === false && (
        <div>
          <div className={`box step${currentStep !== 1 ? " locked" : ""}`}>
            <h1 className="title is-5">
              Step 1 &mdash; <span>Create a username</span>
            </h1>
            <div className="field">
              <label className="label">Username</label>
              <div className="control has-icons-left has-icons-right">
                <input
                  onChange={(e) => setUsername(e.target.value)}
                  className={`input ${
                    userIsAvailable === true
                      ? "is-success"
                      : userIsAvailable === false
                      ? "is-danger"
                      : ""
                  }`}
                  type="text"
                  placeholder="Username"
                />
                <span className="icon is-small is-left">
                  <i className="fas fa-user" />
                </span>
                {userIsAvailable !== null && userIsAvailable === true && (
                  <span className="icon is-small is-right">
                    <i className="fas fa-check" />
                  </span>
                )}
                {userIsAvailable !== null && userIsAvailable === false && (
                  <span className="icon is-small is-right">
                    <i className="fas fa-exclamation-triangle" />
                  </span>
                )}
              </div>
              {userIsAvailable !== null && userIsAvailable === true && (
                <p className="help is-success">This username is available</p>
              )}
              {userIsAvailable !== null && userIsAvailable === false && (
                <p className="help is-danger">This username is not available</p>
              )}
            </div>

            {currentStep === 1 && (
              <div className="field is-grouped is-grouped-right">
                <div className="control">
                  <button
                    className="button is-success"
                    onClick={(e) => setCurrentStep(2)}
                  >
                    Next
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Step 2 */}
          <div className={`box step${currentStep !== 2 ? " locked" : ""}`}>
            <h1 className="title is-5">
              Step 2 &mdash; <span>Enter your email address</span>
            </h1>
            <div className="field">
              {" "}
              <div className="control has-icons-left has-icons-right">
                <input
                  className="input"
                  type="email"
                  placeholder="Email Address"
                />
                <span className="icon is-small is-left">
                  <i className="fas fa-envelope" />
                </span>
                <span className="icon is-small is-right">
                  <i className="fas fa-check" />
                </span>
              </div>{" "}
            </div>

            {currentStep === 2 && (
              <div className="field is-grouped is-grouped-right">
                <div className="control">
                  <button
                    className="button is-link"
                    onClick={(e) => setCurrentStep(1)}
                  >
                    Previous
                  </button>
                </div>
                <div className="control">
                  <button
                    className="button is-success"
                    onClick={(e) => setCurrentStep(3)}
                  >
                    Next
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Step 3 */}
          <div className={`box step${currentStep !== 3 ? " locked" : ""}`}>
            <h1 className="title is-5">
              Step 3 &mdash; <span>Create a password</span>
            </h1>
            <div className="field">
              <div className="control has-icons-left has-icons-right">
                <input
                  className="input"
                  type="password"
                  placeholder="Password"
                />
                <span className="icon is-small is-left">
                  <i className="fas fa-lock" />
                </span>
              </div>
            </div>
            <div className="field">
              <div className="control has-icons-left has-icons-right">
                <input
                  className="input"
                  type="password"
                  placeholder="Confirm Password"
                />
                <span className="icon is-small is-left">
                  <i className="fas fa-lock" />
                </span>
              </div>
            </div>

            {currentStep === 3 && (
              <div className="field is-grouped is-grouped-right">
                <div className="control">
                  <button
                    className="button is-link"
                    onClick={(e) => setCurrentStep(2)}
                  >
                    Previous
                  </button>
                </div>
                <div className="control">
                  <button
                    className="button is-success"
                    onClick={(e) => setAccountCreated(true)}
                  >
                    Create Account
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
CreateView.__TITLE__ = "Create Account";
