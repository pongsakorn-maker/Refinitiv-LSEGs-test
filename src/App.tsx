import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Question1 from "./pages/Question1";
import Question2 from "./pages/Question2";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/question1">
            <Question1 />
          </Route>
          <Route path="/question2">
            <Question2 />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
