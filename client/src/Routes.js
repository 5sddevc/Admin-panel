import React from "react";
import { Route, Switch } from "react-router-dom";


// Register and Login Screen

import Shell from "./views/shell/shell";
// import NotFound from "../NotFound";
import RootModal from "./commons/modals/rootModal";

class Routes extends React.Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={Shell} />
          {/* <Route path='*' exact={true} component={NotFound} />
          <Route path='/404' exact={true} component={NotFound} /> */}
        </Switch>
        <RootModal/>
      </div>
    );
  }
}

export default Routes;
