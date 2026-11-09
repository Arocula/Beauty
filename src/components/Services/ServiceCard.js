import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { AiOutlinePhone } from "react-icons/ai";
import salon from "../../data/salon";

function ServiceCard({ service }) {
  return (
    <Card className="project-card-view">
      {service.image ? (
        <Card.Img variant="top" src={service.image} alt={service.title} />
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
          💅
        </div>
      )}
      <Card.Body>
        <Card.Title>{service.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {service.description}
        </Card.Text>
        <p className="purple" style={{ fontWeight: "bold", fontSize: "1.3em" }}>
          {service.price} ₽
        </p>
        <p style={{ color: "#a588c0" }}>⏱ {service.duration}</p>
        <Button variant="primary" href={`tel:${salon.phone}`}>
          <AiOutlinePhone /> Записаться
        </Button>
      </Card.Body>
    </Card>
  );
}

export default ServiceCard;