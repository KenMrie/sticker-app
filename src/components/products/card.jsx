import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import StickerPlaceholder from "../../assets/images/StickerPlaceholder.png";
import { CardInfo } from "./cardinfo";

export const Cardz = ({ sticker }) => {
  return (
    <>
      <Card className="shadow-sm" style={{ width: "18rem", height: "26rem" }}>
        <Card.Img
          variant="top"
          src={sticker.image}
          style={{ width: "100%", height: "221px", objectFit: "contain" }}
        />
        <Card.Body>
          <Card.Title> {sticker.name} </Card.Title>
          <Card.Text>{sticker.description}</Card.Text>
          <div className="d-flex justify-content-between">
            <div>
              <h5>${(sticker.price).toFixed(2)}</h5>
            </div>
            <div>
              <CardInfo sticker={sticker} />
            </div>
          </div>
        </Card.Body>
      </Card>
    </>
  );
};
