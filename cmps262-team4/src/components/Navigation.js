import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import {ViewManager} from "../App";
import CreateView from "./user/CreateView";
import FeedView from "./feed/FeedView";

export default function Navigation() {
    return (
        <Router>
            <div>
                <nav className="navbar" role="navigation" aria-label="main navigation">
                    <div className="navbar-brand">
                        <a className="navbar-item" href="https://bulma.io">
                            <img src="https://via.placeholder.com/640x160" width="112" height="28"/>
                        </a>

                        <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false"
                           data-target="navbarBasicExample">
                            <span aria-hidden="true"></span>
                            <span aria-hidden="true"></span>
                            <span aria-hidden="true"></span>
                        </a>
                    </div>

                    <div id="navbarBasicExample" className="navbar-menu">
                        <div className="navbar-start">
                            <Link className="navbar-item" to="/">
                                Home
                            </Link>

                            <Link className="navbar-item" to="/profiles">
                                Profiles
                            </Link>


                        </div>

                        <div className="navbar-end">
                            <div className="navbar-item">
                                <div className="buttons">
                                    <Link className="button is-primary" to="/create-account">
                                        <strong>Sign up</strong>
                                    </Link>
                                    <Link className="button is-light" to="/sign-in">
                                        Log in
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>

                {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
                <Switch>
                    <Route path="/sign-in">
                        <ViewManager view="LoginView"/>
                    </Route>
                    <Route path="/create-account">
                        <ViewManager view={CreateView} />
                    </Route>
                    <Route path="/profiles">
                        <ViewManager view="profiles"/>
                    </Route>
                    <Route path="/">
                        <ViewManager view={FeedView} />
                    </Route>
                </Switch>
            </div>
        </Router>
    )

};
