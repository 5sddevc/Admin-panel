import React from 'react';
import 'antd/dist/antd.css';
import logo from './logo.svg';
import './App.css';
import {ButtonWrapper} from '../components/Button';

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
      </header>
      <div>
        <ButtonWrapper type="danger"/>
        <ButtonWrapper type="danger" loading={true}/>
        </div>
    </div>
  );
}

export default App;
