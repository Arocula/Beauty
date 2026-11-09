import React from "react";
import { Col, Row, Card } from "react-bootstrap";
import employees from "../../data/employees";

function Employees() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {employees.map((emp) => (
        <Col md={4} className="project-card" key={emp.id}>
          <Card className="project-card-view">
            {emp.photo ? (
              <Card.Img variant="top" src={emp.photo} alt={emp.name} />
            ) : (
              <div
                style={{
                  height: "250px",
                  background: "#2d1950",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#c770f0",
                  fontSize: "3em",
                }}
              >
                {emp.name.charAt(0)}
              </div>
            )}
            <Card.Body>
              <Card.Title>{emp.name}</Card.Title>
              <Card.Subtitle className="mb-2 purple">
                {emp.position}
              </Card.Subtitle>
              <Card.Text style={{ textAlign: "justify" }}>
                <strong>Опыт:</strong> {emp.experience}
                <br />
                <strong>Специализация:</strong> {emp.specialization}
                <br />
                <br />
                {emp.description}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default Employees;