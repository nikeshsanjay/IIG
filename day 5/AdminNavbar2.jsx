import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/Styles/Navbar2.css';
import logo from '../assets/images/logo.png'; 

const AdminNavigationBar2 = () => {
  return (
    <Navbar bg="light" expand="lg" className='Navbar-custom'>
      <Navbar.Brand as={Link} to="/" className='brand-custom'>
        <img src={logo} alt="Vehicle Repair Hub Logo" className='logo-custom' />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          <Nav.Link as={Link} to="/Home" className='Home-custom nav-link-custom'>Home</Nav.Link>
          <Nav.Link as={Link} to="/about" className='Aboutus-custom nav-link-custom'>About Us</Nav.Link>
          <NavDropdown title="Account" id="basic-nav-dropdown" className='account-dropdown-custom nav-link-custom'>
            <NavDropdown.Item as={Link} to="/AdminDashboard" className='dropdown-item-custom'>My Account</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item as={Link} to="/Home" className='dropdown-item-custom'>Logout</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default AdminNavigationBar2;
