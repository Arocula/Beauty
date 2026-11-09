import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import salon from "../../data/salon";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row style={{ justifyContent: "center" }}>
          <Col md={10} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              НЕМНОГО <span className="purple"> О НАС </span>
            </h1>
            <p className="home-about-body">{salon.description}</p>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;