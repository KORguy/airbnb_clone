import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// Views
import { Home } from "./views/Home";
import { Activity } from "./views/Activity";
import { Corona } from "./views/Corona";
import { Host } from "./views/Host";

// CSS
import "./css/App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/Activity">
            <Activity />
          </Route>
          <Route path="/Corona">
            <Corona />
          </Route>
          <Route path="/Host">
            <Host />
          </Route>
        </Switch>
        {/* Home */}
        {/* Header */}

        {/* Banner */}
        {/* Search */}

        {/* Cards */}

        {/* Footer */}

        {/* SearchPage */}
        {/* ... */}
      </div>
    </Router>
  );
}

export default App;
