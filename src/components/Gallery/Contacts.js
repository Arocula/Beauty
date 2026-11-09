import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import Particle from "../Particle";
import { AiOutlinePhone, AiOutlineMail, AiOutlineClockCircle } from "react-icons/ai";
import { AiFillInstagram, AiOutlineWhatsApp } from "react-icons/ai";
import { FaVk, FaTelegramPlane } from "react-icons/fa";
import { ImLocation2 } from "react-icons/im";
import salon from "../../data/salon";

function Contacts() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Наши <strong className="purple">контакты</strong>
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={6} className="project-card">
            <Card className="project-card-view">
              <Card.Body>
                <h3>
                  <ImLocation2 /> Адрес
                </h3>
                <p>{salon.address}</p>

                <h3>
                  <AiOutlinePhone /> Телефон
                </h3>
                <p>
                  <a href={`tel:${salon.phone}`} style={{ color: "#c770f0" }}>
                    {salon.phone}
                  </a>
                </p>

                <h3>
                  <AiOutlineMail /> Email
                </h3>
                <p>
                  <a href={`mailto:${salon.email}`} style={{ color: "#c770f0" }}>
                    {salon.email}
                  </a>
                </p>

                <h3>
                  <AiOutlineClockCircle /> Часы работы
                </h3>
                <p>{salon.workingHours}</p>
              </Card.Body>
            </Card>
          </Col>

          <Col md={6} className="project-card">
            <Card className="project-card-view">
              <Card.Body>
                <h3>Мы в соцсетях</h3>
                <ul className="home-about-social-links">
                  <li className="social-icons">
                    <a href={salon.socials.instagram} target="_blank" rel="noreferrer"
                       className="icon-colour home-social-icons"><AiFillInstagram /></a>
                  </li>
                  <li className="social-icons">
                    <a href={salon.socials.vk} target="_blank" rel="noreferrer"
                       className="icon-colour home-social-icons"><FaVk /></a>
                  </li>
                  <li className="social-icons">
                    <a href={salon.socials.telegram} target="_blank" rel="noreferrer"
                       className="icon-colour home-social-icons"><FaTelegramPlane /></a>
                  </li>
                  <li className="social-icons">
                    <a href={salon.socials.whatsapp} target="_blank" rel="noreferrer"
                       className="icon-colour home-social-icons"><AiOutlineWhatsApp /></a>
                  </li>
                </ul>
                <p style={{ marginTop: "20px", color: "#a588c0" }}>
                  Напишите нам — мы оперативно ответим и поможем записаться.
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Contacts;