import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import BlogCard from "./BlogCard";
import blogData from "../../data/blog";

function Blog() {
  const [blog, setBlog] = useState(blogData);

  useEffect(() => {
    const saved = localStorage.getItem("admin_blog");
    if (saved) {
      setBlog(JSON.parse(saved));
    }
  }, []);

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Новости и <strong className="purple">акции</strong>
        </h1>
        <p style={{ color: "white" }}>
          Следите за нашими новостями и специальными предложениями.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {blog.map((post) => (
            <Col md={4} className="project-card" key={post.id}>
              <BlogCard post={post} />
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Blog;