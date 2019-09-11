import React from "react";
import "./App.css";
import "antd/dist/antd.css";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./configureStore";
import Routes from "./Routes";
import RootModal from "./commons/modals/rootModal";

function App() {
  return (
    <BrowserRouter basename="/bufflunch-web-uat">
      <Provider store={store}>
        <Routes />
        <RootModal />
      </Provider>
    </BrowserRouter>
  );
}

export default App;
