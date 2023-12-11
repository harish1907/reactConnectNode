import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import React, { useEffect } from "react";

function App() {
  const getApiCall = async () => {
    try {
      const response = await axios.get("http://localhost:4000/api");
      console.log("response", response?.data);
    } catch (e) {
      console.log("error", e);
    }
  };
  useEffect(() => {
    getApiCall();
  }, []);
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
    </div>
  );
}

export default App;
