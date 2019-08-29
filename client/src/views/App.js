import React from 'react';
import 'antd/dist/antd.css';
import logo from './logo.svg';
import './App.css';
import Button from '../components/Button';
import Input from '../components/Input';
import Login from "./login";
import { store } from "../store/configureStore";

const action = (type, payload) => store.dispatch({type, payload});

function App() {
  return (
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
      </header>
    </div>
  );
}

export default App;
