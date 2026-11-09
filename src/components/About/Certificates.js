import React from "react";
import { Col, Row, Card } from "react-bootstrap";
import certificates from "../../data/certificates";

function Certificates() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
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
              <Card.Subtitle className="mb-2 purple">{cert.year}</Card.Subtitle>
              <Card.Text>{cert.description}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default Certificates;