import React, { useState, useEffect } from "react";
import axios from "axios";
import { Cardz } from "./card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { productInfo } from "../../configs/cards/cards.config";
import { Loading } from "../loading/loading";

export const Products = () => {

  return (
    <>
      <Container className="mt-5">

          <Row xs="auto" style={{ display: "flex", justifyContent: "center" }}>
            {productInfo.map((sticker, index) => (
              <Col className="mb-3" key={index}>
                <Cardz sticker={sticker} />
              </Col>
            ))}
          </Row>
      </Container>
    </>
  );
};