import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/Styles/NavBar.css';
import logo from '../assets/images/logo.png'; 

const AdminNavigationBar = () => {
  return (
    <Navbar bg="light" expand="lg" className='Navbar-custom'>
      <Navbar.Brand as={Link} to="/" className='brand-custom'>
        <img src={logo} alt="Vehicle Repair Hub Logo" className='logo-custom' />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          <Nav.Link as={Link} to="/Home" className='Home-custom nav-link-custom'>Home</Nav.Link>
          <Nav.Link as={Link} to="/AboutUs" className='Aboutus-custom nav-link-custom'>About Us</Nav.Link>
          <Nav.Link as={Link} to="/Adminlogin" className='login-custom nav-link-custom'>Login</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default AdminNavigationBar;
