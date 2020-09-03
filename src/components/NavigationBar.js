import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import { Nav, Navbar } from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`
  .navbar {
    background:transparent;
  }

  a , .navbar-nav .nav-link {
    color: black;

    &:hover {
      color: #1a8cff;
    }

  }
  .nav-item {
    margin-right: 20px;
    cursor: pointer;
    transition: 250ms;
    cursor: pointer;
    color: #333;
    text-decoration: fuchsia;
}
.nav-h{
  font-family: 'Bebas Neue';font-size: 32px;
}
  .nav-item:hover {
    transform: scale(1.1);

    .link-button {
    padding: 10px  10px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    border: 1px  solid  #663399;
}
.navbar-brand{
  font-family:sans-serif;
  font-size:46px;
}
.link-button-primary {
    background: #663399;
    color: white;
}
}
`;



export const NavigationBar = () => (
  <Styles>
    <Navbar expand="sm">
      <Navbar.Brand href="/"><span className="nav-h">EVENT TIME </span><i class="fa fa-briefcase fa-sm" aria-hidden="true"></i></Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav" >
        <Nav className="ml-auto">
          <Nav.Item>
            <Nav.Link>
              <Link to="/">HOME</Link>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link>
              <Link to="/about">ABOUT</Link>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link>
              <Link to="/contact">CONTACT</Link>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link>
              <Link to="/gallery">GALLERY</Link>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link>
              <Link to="/event">EVENT</Link>
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </Styles >
)
