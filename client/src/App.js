import React from "react";
import "./App.css";
import "antd/dist/antd.css";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import { theme } from "./configurations/Theme";
import { store } from "./ConfigureStore";
import Routes from "./Routes";
import RootModal from "./commons/modals";

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <React.Fragment>
            <Routes />
            <RootModal />
          </React.Fragment>
        </ThemeProvider>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
