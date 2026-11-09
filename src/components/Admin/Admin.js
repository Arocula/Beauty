import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, Form, Button, Table } from "react-bootstrap";
import { api } from "../../api"; // Наш API
import { categories } from "../../data/services";

const ADMIN_PASSWORD = "admin"; // Временно

function Admin() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [password, setPassword] = useState("");
  const [activeTab, setActiveTab] = useState("services");

  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(false);

  // Загрузка услуг
  const fetchServices = () => {
    setLoading(true);
    api.get("/services")
      .then((res) => {
        setServices(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  };

  useEffect(() => {
    if (loggedIn) fetchServices();
  }, [loggedIn]);

  const handleLogin = (e) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      setLoggedIn(true);
      setPassword("");
    } else {
      alert("Неверный пароль");
    }
  };

  // --- ОПЕРАЦИИ С УСЛУГАМИ ---

  const updateServiceLocal = (id, field, value) => {
    setServices(services.map((s) => s.id === id ? { ...s, [field]: value } : s));
  };

  const saveService = async (service) => {
    try {
      await api.put(`/services/${service.id}`, service);
      alert("Услуга сохранена!");
    } catch (err) {
      alert("Ошибка сохранения: " + err.message);
    }
  };

  const deleteService = async (id) => {
    if (window.confirm("Удалить услугу?")) {
      try {
        await api.delete(`/services/${id}`);
        fetchServices();
      } catch (err) {
        alert("Ошибка удаления: " + err.message);
      }
    }
  };

  const addService = async () => {
    try {
      const newService = {
        category: categories[0].id,
        title: "Новая услуга",
        description: "Описание",
        price: 0,
        duration: "30 мин",
        order: services.length + 1
      };
      await api.post("/services", newService);
      fetchServices();
    } catch (err) {
      alert("Ошибка добавления: " + err.message);
    }
  };

  if (!loggedIn) {
    return (
      <Container fluid className="project-section">
        <Container>
          <Row style={{ justifyContent: "center", paddingTop: "100px" }}>
            <Col md={4}>
              <Card className="project-card-view">
                <Card.Body>
                  <h3 style={{ color: "white", textAlign: "center", marginBottom: "20px" }}>
                    Вход в админку
                  </h3>
                  <Form onSubmit={handleLogin}>
                    <Form.Group className="mb-3">
                      <Form.Control
                        type="password"
                        placeholder="Пароль (admin)"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </Form.Group>
                    <Button variant="primary" type="submit" className="w-100">
                      Войти
                    </Button>
                  </Form>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </Container>
    );
  }

  return (
    <Container fluid className="project-section">
      <Container>
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "20px" }}>
          <h1 className="project-heading">Админ-<strong className="purple">панель</strong></h1>
          <Button variant="outline-light" onClick={() => setLoggedIn(false)}>Выйти</Button>
        </div>

        <div style={{ marginBottom: "20px", textAlign: "center" }}>
          <Button variant={activeTab === "services" ? "primary" : "outline-light"} className="m-2" onClick={() => setActiveTab("services")}>
            Услуги
          </Button>
          <Button variant={activeTab === "blog" ? "primary" : "outline-light"} className="m-2" onClick={() => setActiveTab("blog")}>
            Новости (В разработке)
          </Button>
        </div>

        {activeTab === "services" && (
          <>
            <Button variant="primary" className="mb-3" onClick={addService}>
              + Добавить услугу
            </Button>
            {loading ? (
               <p style={{color: "white"}}>Загрузка из базы...</p>
            ) : (
              <Table striped bordered hover variant="dark" responsive>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Категория</th>
                    <th>Название</th>
                    <th>Описание</th>
                    <th>Цена (₽)</th>
                    <th>Длительность</th>
                    <th>Действия</th>
                  </tr>
                </thead>
                <tbody>
                  {services.map((s) => (
                    <tr key={s.id}>
                      <td>{s.id}</td>
                      <td>
                        <Form.Select
                          value={s.category}
                          onChange={(e) => updateServiceLocal(s.id, "category", e.target.value)}
                        >
                          {categories.map((c) => (
                            <option key={c.id} value={c.id}>{c.title}</option>
                          ))}
                        </Form.Select>
                      </td>
                      <td>
                        <Form.Control
                          value={s.title}
                          onChange={(e) => updateServiceLocal(s.id, "title", e.target.value)}
                        />
                      </td>
                      <td>
                        <Form.Control
                          as="textarea"
                          value={s.description || ""}
                          onChange={(e) => updateServiceLocal(s.id, "description", e.target.value)}
                        />
                      </td>
                      <td>
                        <Form.Control
                          type="number"
                          value={s.price}
                          onChange={(e) => updateServiceLocal(s.id, "price", Number(e.target.value))}
                        />
                      </td>
                      <td>
                        <Form.Control
                          value={s.duration || ""}
                          onChange={(e) => updateServiceLocal(s.id, "duration", e.target.value)}
                        />
                      </td>
                      <td>
                        <div style={{ display: "flex", gap: "5px", flexDirection: "column" }}>
                          <Button variant="success" size="sm" onClick={() => saveService(s)}>
                            Сохранить
                          </Button>
                          <Button variant="danger" size="sm" onClick={() => deleteService(s.id)}>
                            Удалить
                          </Button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            )}
          </>
        )}
      </Container>
    </Container>
  );
}

export default Admin;