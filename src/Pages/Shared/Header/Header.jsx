import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../../images/brand-logo.png";
import "./Header.css";
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init'
import { signOut } from "firebase/auth";

const Header = () => {
  const [user] = useAuthState(auth);

  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark">
        <Container className=" py-3">
          <Link to="/">
            <img className="w-75" src={logo} alt="" />
          </Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link className="me-4 text-white" as={Link} to="/">
                Home
              </Nav.Link>
              <Nav.Link className="me-4 text-white" as={Link} to="/about">
                About
              </Nav.Link>
              <Nav.Link className="me-4 text-white" as={Link} to="/blogs">
                Blogs
              </Nav.Link>
              {
                user?(
                  <Nav.Link onClick={() => signOut(auth)} className="me-4 text-white" as={Link} to="/login">
                LogOut
              </Nav.Link>
                ):(
                  <Nav.Link className="me-4 text-white" as={Link} to="/login">
                LogIn
              </Nav.Link>
                )
              }
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
