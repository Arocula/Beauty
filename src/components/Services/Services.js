import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Particle from "../Particle";
import ServiceCard from "./ServiceCard";
import { categories } from "../../data/services"; // категории пока оставим локально
import { api } from "../../api"; // <-- Импортируем наш API

function Services() {
  const [services, setServices] = useState([]);
  const [activeCategory, setActiveCategory] = useState("all");
  const [loading, setLoading] = useState(true);

  // Загружаем услуги из базы при запуске страницы
  useEffect(() => {
    api.get("/services")
      .then((response) => {
        setServices(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Ошибка загрузки услуг:", error);
        setLoading(false);
      });
  }, []);

  const filtered =
    activeCategory === "all"
      ? services
      : services.filter((s) => s.category === activeCategory);

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Наши <strong className="purple">услуги</strong>
        </h1>
        <p style={{ color: "white" }}>
          Полный прайс-лист салона. Записывайтесь по телефону или в соцсетях.
        </p>

        <Row style={{ justifyContent: "center", paddingBottom: "20px" }}>
          <Col md={12} style={{ textAlign: "center" }}>
            <Button
              variant={activeCategory === "all" ? "primary" : "outline-light"}
              className="m-2"
              onClick={() => setActiveCategory("all")}
            >
              Все
            </Button>
            {categories.map((cat) => (
              <Button
                key={cat.id}
                variant={activeCategory === cat.id ? "primary" : "outline-light"}
                className="m-2"
                onClick={() => setActiveCategory(cat.id)}
              >
                {cat.title}
              </Button>
            ))}
          </Col>
        </Row>

        {loading ? (
          <p style={{ color: "white", textAlign: "center" }}>Загрузка услуг...</p>
        ) : (
          <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
            {filtered.length === 0 ? (
              <p style={{ color: "white", textAlign: "center" }}>
                В этой категории пока нет услуг.
              </p>
            ) : (
              filtered.map((service) => (
                <Col md={4} className="project-card" key={service.id}>
                  <ServiceCard service={service} />
                </Col>
              ))
            )}
          </Row>
        )}
      </Container>
    </Container>
  );
}

export default Services;