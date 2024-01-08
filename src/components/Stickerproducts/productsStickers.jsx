import axios from "axios";
import React, { useState, useEffect } from "react";
import { Cardz } from "./card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { stickerInfo } from "../../configs/cards/cards.config";
import { Loading } from "../loading/loading";

export const ProductsStickers = () => {
  const baseUrl = import.meta.env.VITE_APP_BASEURL;
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);

  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const getUserData = async () => {
    try {
      const response = await axios.get(baseUrl, config);
      setUser(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Error al obtener los datos de la galería", error);
      setLoading(true);
    }
  };

  useEffect(() => {
    getUserData();
  }, []);

  return (
    <>
      <Container className="mt-5 mb-5">
        {loading === true ? (
          <>
            <div className="d-flex align-items-center justify-content-center">
              <Loading />
            </div>
          </>
        ) : (
          <>
          <h1 style={{paddingLeft: '12px'}}> Stickers </h1>
          <Row xs="auto" style={{ display: "flex", justifyContent: "center" }}>
            {stickerInfo.map((sticker, index) => (
              <Col className="mb-3" key={index}>
                <Cardz sticker={sticker} />
              </Col>
            ))}
          </Row>
          </>
        )}
      </Container>
    </>
  );
};
