import React from 'react';
import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

import Users from '../Users/Users';
import Login from '../Login/Login';

function App() {
  return (
    <>
        <Router>
            <Switch>
                <Route path="/users">
                    <Users />
                </Route>
                <Route path="/">
                    <Login />
                </Route>
            </Switch>
        </Router>
    </>
  );
}

export default App;
