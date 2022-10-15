import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const Header = () => {
  return (
    <Navbar
      className="nav"
      collapseOnSelect
      variant="dark"
      expand="xl"
      fixed="top"
      style={{ backgroundColor: "#16213E" }}
    >
      <Container>
        <Navbar.Brand
          href="/"
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <p className="h1">Book.io </p>

          <i style={{ marginLeft: "3px", marginTop: "25px" }}>panel</i>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav
            style={{
              fontSize: "20px",
            }}
          >
            <Nav.Link href="/about" style={{ marginRight: "20px" }}>
              About
            </Nav.Link>
            <Nav.Link href="/add">Add Book</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
