import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { kebabCase } from "lodash";

class App extends Component {
  onClick = () => {
    console.log(kebabCase("TEEEEEEEEEST2"));
  };

  render() {
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
          <button onClick={this.onClick}>CLICK ME 2021</button>
        </header>
      </div>
    );
  }
}

export default App;
