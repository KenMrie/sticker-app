import { Cardz } from "./card";
import { productInfo } from "../../configs/cards/cards.config";
import React from "react";
import { Navbar, Container, Row, Col, Button } from "react-bootstrap";

export const ProductsHome = () => {
  const homeProducts = productInfo.slice(0, 3);

  return (
    <>
      <Navbar bg="success" data-bs-theme="dark" style={{ height: "50px" }} className="mb-4">
        <Container className="justify-content-left">
          <h1
            style={{
              color: "white",
              fontFamily: "Courier New, Courier, monospace",
            }}
          >
            Stickers
          </h1>
        </Container>
      </Navbar>

      <Container>
        <Row xs="auto" style={{ display: "flex", justifyContent: "center" }}>
          {homeProducts.map((sticker, index) => (
            <Col className="mb-3" key={index}>
              <Cardz sticker={sticker} />
            </Col>
          ))}
        </Row>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Button
            variant="success"
            style={{ fontSize: "18px" }}
            href="/stickers"
            className="mb-4 mt-2"
          >
            
            More stickers here
          </Button>
        </div>
      </Container>
    </>
  );
};
