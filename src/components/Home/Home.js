import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import salon from "../../data/salon";
import { AiFillInstagram, AiOutlineWhatsApp } from "react-icons/ai";
import { FaVk, FaTelegramPlane } from "react-icons/fa";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={12} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Добро пожаловать{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  💅
                </span>
              </h1>

              <h1 className="heading-name">
                МЫ — <strong className="main-name">{salon.name.toUpperCase()}</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>
          </Row>
        </Container>
      </Container>

      <Home2 />

      <Container>
        <Row style={{ paddingTop: "50px", paddingBottom: "80px" }}>
          <Col md={12} className="home-about-social">
            <h1>Мы в соцсетях</h1>
            <p>
              Подписывайтесь, чтобы не пропустить{" "}
              <span className="purple">акции</span>
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href={salon.socials.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href={salon.socials.vk}
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaVk />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href={salon.socials.telegram}
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaTelegramPlane />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href={salon.socials.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiOutlineWhatsApp />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Home;