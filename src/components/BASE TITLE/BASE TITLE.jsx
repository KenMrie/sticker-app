import React from "react";
import { Container } from "react-bootstrap";
import { Navbar } from "react-bootstrap";

export const Titles = () => {
  return (
    <>
      <Navbar bg="success" data-bs-theme="dark" style={{ height: "50px" }} className="mt-4">
        <Container className="justify-content-left">
          <h1
            style={{
              color: "white",
              fontFamily: "Courier New, Courier, monospace",
            }}
          >
            Placeholder
          </h1>
        </Container>
      </Navbar>
    </>
  );
};
