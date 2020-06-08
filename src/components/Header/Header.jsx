import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss";
// Bootstrap
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

/**
 * Header component
 * Show navbar with pages of App
 */
const Header = () => {
  return (
    <header className='Header'>
      <Navbar collapseOnSelect expand='sm' bg='dark' variant='dark'>
        <Navbar.Brand as={Link} to='/'>
          GH - TheMovieDB
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse id='responsive-navbar-nav'>
          <Nav className='mr-auto'>
            <Nav.Link as={Link} to='movies'>
              Movies
            </Nav.Link>
            <Nav.Link as={Link} to='series'>
              Series
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
};

export default Header;
