import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import BarCodeScanner from "./components/BarCodeScanner";

function App() {
  return (
    <>
      <Router>
        <BarCodeScanner />
      </Router>
    </>
  );
}
export default App;
