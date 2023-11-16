import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useNavigate } from "react-router-dom";

export const NavbarMenu = () => {
  const navigate = useNavigate();


  return (
    <>
      <Navbar bg="success" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/">ステッカー</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/stickers">
              Available stickers
            </Nav.Link>
            <Nav.Link href="/aboutUs">
              About us
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};
