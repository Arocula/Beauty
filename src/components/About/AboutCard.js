import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
import salon from "../../data/salon";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            {salon.description}
            <br />
            <br />
            Почему выбирают нас:
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Опытные мастера с профильным образованием
            </li>
            <li className="about-activity">
              <ImPointRight /> Премиальные материалы и оборудование
            </li>
            <li className="about-activity">
              <ImPointRight /> Индивидуальный подход к каждому клиенту
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "{salon.slogan}"
          </p>
          <footer className="blockquote-footer">{salon.name}</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;