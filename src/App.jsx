import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import './App.css'; // Add custom CSS for styling if needed
import 'bootstrap/dist/css/bootstrap.min.css';

// Importing the Parent component that will handle the routes
import Parent from './Components/Parent';

const App = () => {
  return (
    <>
      {/* Navbar stays constant across all pages */}
      <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
        <Container>
          <Navbar.Brand as={Link} to="/">Sandeep Kashaboina</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto fs-5">
              {/* <Nav.Link as={Link} to="/home">Home</Nav.Link> */}
              <Nav.Link as={Link} to="/about">About</Nav.Link>
              <Nav.Link as={Link} to="/skills">Skills</Nav.Link>
              <Nav.Link as={Link} to="/projects">Projects</Nav.Link>
              <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Main content will change based on route */}
      <div style={{ marginTop: '80px' }}> {/* Adjust for navbar height */}
        <Parent /> {/* Render the routes from Parent component */}
      </div>
    </>
  );
};

export default App;
