import React, { useEffect, useState } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import logo from "../assets/img/logo.svg";
import Form from "react-bootstrap/Form";
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };



  return (
    <div>
      <Navbar expand="lg" className={`${scrolled ? "scrolled" : ""} bg-dark`}>
        <Container fluid>
          <Navbar.Brand href="/">
            <img src={logo} alt="Home" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll" className="justify-content-center">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >

              <Nav.Link
                href="/recipes"
                className={
                  activeLink === "recipes"
                    ? "active navbar-link"
                    : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("recipes")}
              >
                Recipes
              </Nav.Link>
              <Nav.Link
                href="/faqs" className={activeLink === "faqs" ? "active navbar-link" : "navbar-link link"}>
                  FAQs
              </Nav.Link>
              <Nav.Link
                href="/login" className={activeLink === "login" ? "active navbar-link" : "navbar-link link"}>
                  Login
              </Nav.Link>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2 custom-nav-search"
                aria-label="Search"
              />
              <Button variant="outline-secondary" className="custom-nav-search-button">
                Search
              </Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};
