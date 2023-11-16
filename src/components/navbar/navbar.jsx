import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useNavigate } from "react-router-dom";

export const NavbarMenu = () => {
  const navigate = useNavigate();

  const goToLink = (enlace) => {
    navigate(`/${enlace}`)
  }
  return (
    <>
      <Navbar bg="success" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/">ステッカー</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={() => ("/")}>Home</Nav.Link>
            <Nav.Link onClick={() => ("/stickers")}>
              Available stickers
            </Nav.Link>
            <Nav.Link onClick={() => ("/aboutUs")}>
              About us
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};
