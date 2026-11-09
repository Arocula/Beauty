import React from "react";
import { Col, Row, Card } from "react-bootstrap";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import reviews from "../../data/reviews";

function Reviews() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {reviews.map((rev) => (
        <Col md={4} className="project-card" key={rev.id}>
          <Card className="project-card-view">
            <Card.Body>
              <Card.Title>{rev.name}</Card.Title>
              <div style={{ color: "#c770f0", marginBottom: "10px" }}>
                {[...Array(5)].map((_, i) =>
                  i < rev.rating ? <AiFillStar key={i} /> : <AiOutlineStar key={i} />
                )}
              </div>
              <Card.Text style={{ textAlign: "justify" }}>{rev.text}</Card.Text>
              <small style={{ color: "#a588c0" }}>{rev.date}</small>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default Reviews;