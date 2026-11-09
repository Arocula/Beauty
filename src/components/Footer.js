import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillInstagram,
  AiOutlineWhatsApp,
} from "react-icons/ai";
import { FaVk, FaTelegramPlane } from "react-icons/fa";
import salon from "../data/salon";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>© {year} {salon.name}</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>{salon.phone}</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href={salon.socials.instagram}
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillInstagram />
              </a>
            </li>
            <li className="social-icons">
              <a
                href={salon.socials.vk}
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaVk />
              </a>
            </li>
            <li className="social-icons">
              <a
                href={salon.socials.telegram}
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTelegramPlane />
              </a>
            </li>
            <li className="social-icons">
              <a
                href={salon.socials.whatsapp}
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiOutlineWhatsApp />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;