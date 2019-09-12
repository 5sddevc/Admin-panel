import React from "react";
import { Route, Switch } from "react-router-dom";

// Register and Login Screen
import Login from "./views/login";
import Signup from "./views/signup";
import Shell from "./views/shell/shell";
// import NotFound from "../NotFound";

class Routes extends React.Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={Shell} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          {/* <Route exact path="/" component={Shell} /> */}
          {/* <Route path='*' exact={true} component={NotFound} />
          <Route path='/404' exact={true} component={NotFound} /> */}
        </Switch>
      </div>
    );
  }
}

export default Routes;
