import PropTypes from 'prop-types'
import React, { Component } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from 'react-router-dom';

useNavigate

export class NavbarMenu extends Component {
  static propTypes = {}

  render() {
    return (
      <>
      <Navbar bg="success" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/">ステッカー</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="https://sticker-app-eta.vercel.app//">Home</Nav.Link>
            <Nav.Link href="https://sticker-app-eta.vercel.app//stickers">Available stickers</Nav.Link>
            <Nav.Link href="https://sticker-app-eta.vercel.app//aboutUs">About us</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
    )
 }
}

export default NavbarMenu