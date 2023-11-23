import { Cardz } from "./card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { productInfo } from "../../configs/cards/cards.config";

export const Products = () => {
    
  return (
    <>
      <Container className="mt-5 mb-5">
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
