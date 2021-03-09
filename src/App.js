import React from "react";
import './App.css';
import NavBody from "../src/components/navbar/navBody";
import Main from "../src/components/main/main";
import Report from "../src/components/report/report";
import {
  BrowserRouter as Router,
} from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div className="App">
        <NavBody />
        <Main />
        <Report />
      </div>
    </Router>
  );
}
