import React, { Component } from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

export default class AppNavbar extends Component {
  render() {
    return (
      <Navbar className="navbar-dark bg-dark px-5" expand="md">
        <Navbar.Brand href="/">
          <h1>Portfolio</h1>
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/about">About</Nav.Link>
        </Nav>
      </Navbar>
    );
  }
}
