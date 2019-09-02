import React from 'react';
import 'antd/dist/antd.css';
import logo from './logo.svg';
import './App.css';
import Button from '../components/Button';
import Input from '../components/Input';
import Login from "./login";
import { Provider } from "react-redux";
import { store } from "../configureStore";

import Shell from "./shell/shell"

const action = (type, payload) => store.dispatch({type, payload});

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <Button onClick={() => action("Test", "New data")}></Button>
          <Shell />
        </header>
      </div>
    </Provider>
  );
}

export default App;
