import React from "react";
import { connect } from "react-redux";
import "./App.css";
import "antd/dist/antd.css";
import { ThemeProvider } from "styled-components";
import { theme } from "./configurations/Theme";
import Routes from "./Routes";
import RootModal from "./commons/modals";

function App(props) {
  console.log("PROPS", props)
  return (
    <ThemeProvider theme={{...theme, mode: props.app.mode}}>
      <React.Fragment>
        <Routes />
        <RootModal />
      </React.Fragment>
    </ThemeProvider>
  );
}

export default connect((storeState) => ({ app: storeState.App }))(App);
