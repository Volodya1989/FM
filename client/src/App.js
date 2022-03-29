import React, { useEffect } from "react";
import axios from "axios";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./containers/Home/Home";
import SavedMessages from "./containers/Home/SavedMessages";

import NoMatch from "./containers/NoMatch/NoMatch";

function App() {
  useEffect(() => {
    axios
      .get("/api/config")
      .then((response) => {
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/savedM" component={SavedMessages} />
        <Route  component={NoMatch} />
      </Switch>
    </Router>
  );
}

export default App;
