import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import Particle from "../Particle";
import certificates from "../../data/certificates";
import reviews from "../../data/reviews";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

function Gallery() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Наши <strong className="purple">сертификаты</strong>
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "40px" }}>
          {certificates.map((cert) => (
            <Col md={4} className="project-card" key={cert.id}>
              <Card className="project-card-view">
                {cert.image ? (
                  <Card.Img variant="top" src={cert.image} alt={cert.title} />
                ) : (
                  <div
                    style={{
                      height: "200px",
                      background: "#2d1950",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#c770f0",
                      fontSize: "3em",
                    }}
                  >
                    🏆
                  </div>
                )}
                <Card.Body>
                  <Card.Title>{cert.title}</Card.Title>
                  <Card.Subtitle className="mb-2 purple">
                    {cert.year}
                  </Card.Subtitle>
                  <Card.Text>{cert.description}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        <h1 className="project-heading">
          Отзывы <strong className="purple">клиентов</strong>
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {reviews.map((rev) => (
            <Col md={4} className="project-card" key={rev.id}>
              <Card className="project-card-view">
                <Card.Body>
                  <Card.Title>{rev.name}</Card.Title>
                  <div style={{ color: "#c770f0", marginBottom: "10px" }}>
                    {[...Array(5)].map((_, i) =>
                      i < rev.rating ? (
                        <AiFillStar key={i} />
                      ) : (
                        <AiOutlineStar key={i} />
                      )
                    )}
                  </div>
                  <Card.Text style={{ textAlign: "justify" }}>
                    {rev.text}
                  </Card.Text>
                  <small style={{ color: "#a588c0" }}>{rev.date}</small>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Gallery;