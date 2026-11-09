import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Aboutcard from "./AboutCard";
import Employees from "./Employees";
import Certificates from "./Certificates";
import Reviews from "./Reviews";

function About() {
  return (
    <>
      <Particle />
      <Container fluid className="about-section">
        <Container>
          <Row style={{ justifyContent: "center", padding: "10px" }}>
            <Col
              md={7}
              style={{
                justifyContent: "center",
                paddingTop: "30px",
                paddingBottom: "50px",
              }}
            >
              <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
                О <strong className="purple">НАС</strong>
              </h1>
              <Aboutcard />
            </Col>
          </Row>

          <h1 className="project-heading">
            Наши <strong className="purple">сотрудники</strong>
          </h1>
          <Employees />

          <h1 className="project-heading">
            <strong className="purple">Сертификаты</strong> и награды
          </h1>
          <Certificates />

          <h1 className="project-heading">
            <strong className="purple">Отзывы</strong> клиентов
          </h1>
          <Reviews />
        </Container>
      </Container>
    </>
  );
}

export default About;