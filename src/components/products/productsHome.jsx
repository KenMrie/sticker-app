import { productInfo } from "../../configs/cards/cards.config";
import React from "react";
import { Navbar, Container, Row, Col, Button, Card } from "react-bootstrap";

export const ProductsHome = () => {
  const homeProducts = productInfo.slice(0, 3);

  return (
    <>
      <Navbar bg="success" data-bs-theme="dark" style={{ height: "50px" }} className="mb-4">
        <Container className="justify-content-center">
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

      <div className="mx-4">
        <Row xs="auto" style={{ display: "flex", justifyContent: "center" }}>
          {homeProducts.map((sticker, index) => (
            <Col className="mb-3" key={index}>
              <Card className="shadow-sm" style={{ width: "14rem", height: "22rem" }}>
        <Card.Img
          variant="top"
          src={sticker.image}
          style={{ width: "100%", height: "200px", objectFit: "contain" }}
        />
        <Card.Body>
          <Card.Title> {sticker.name} </Card.Title>
          <Card.Text>{sticker.description}</Card.Text>
        </Card.Body>
      </Card>
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
      </div>
    </>
  );
};
