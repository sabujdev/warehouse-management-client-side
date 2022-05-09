import { signOut } from "firebase/auth";
import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../../firebase.init";
const Header = () => {
  const [user] = useAuthState(auth);

  const handleSignOut = () => {
    signOut(auth);
  };
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        sticky="top"
        bg="primary"
        variant="dark"
      >
        <Container>
          <Navbar.Brand as={Link} to="/">
            <h4>Best Electronic</h4>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="home">Home</Nav.Link>
              <Nav.Link href="home#products">Product</Nav.Link>
              <Nav.Link href="home#team">OurTeam</Nav.Link>
            </Nav>
            <Nav>
            <Nav.Link as={Link} to="/blog">
                    Blogs
                  </Nav.Link>

                  
          
              {user && (
                <>
                  <Nav.Link as={Link} to="/addProduct">
                    AddProduct
                  </Nav.Link>
                  <Nav.Link as={Link} to="/manage">
                    Manage Product
                  </Nav.Link>
                  <Nav.Link as={Link} to="/order">
                    My item
                  </Nav.Link>
                 
                 
                </>
              )}


              {user ? (
                <button
                  className="btn btn-link text-white text-decoration-none"
                  onClick={handleSignOut}
                >
                  sign out
                </button>
              ) : (
                <Nav.Link as={Link} to="login">
                  Login
                </Nav.Link>
              )}
              
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
