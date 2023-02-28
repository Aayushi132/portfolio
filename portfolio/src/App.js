import React, { Component } from "react";
import Home from "./home";
import About from "./about";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import AppNavbar from "./Navbar";

class App extends Component {
  render() {
    return (
      <Router>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/about" exact element={<About />} />
        </Routes>
      </Router>
    );
  }
}

export default App;
