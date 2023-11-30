import React from "react";
import { Container } from "react-bootstrap";
import { Navbar } from "react-bootstrap";

export const AboutUsInfo = () => {
  return (
    <>
      <Navbar
        bg="success"
        data-bs-theme="dark"
        style={{ height: "50px" }}
        className="mt-4"
      >
        <Container className="justify-content-center">
          <h1
            style={{
              color: "white",
              fontFamily: "Courier New, Courier, monospace",
            }}
          >
            Welcome!
          </h1>
        </Container>
      </Navbar>
<br/>
      <p> Hello, our names are ケン, パblオ and Wイリ, this is a placeholder that will probably have a </p>

    </>
  );
};
