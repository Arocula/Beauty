import React from "react";
import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";

function BlogCard({ post }) {
  const isPromo = post.tag === "акция";
  return (
    <Card className="project-card-view">
      {post.image ? (
        <Card.Img variant="top" src={post.image} alt={post.title} />
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
          {isPromo ? "🎁" : "📰"}
        </div>
      )}
      <Card.Body>
        <Badge bg={isPromo ? "danger" : "primary"} className="mb-2">
          {post.tag.toUpperCase()}
        </Badge>
        <Card.Title>{post.title}</Card.Title>
        <small style={{ color: "#a588c0" }}>{post.date}</small>
        <Card.Text style={{ textAlign: "justify", marginTop: "10px" }}>
          {post.text}
        </Card.Text>
        {post.promoCode && (
          <p className="purple">
            Промокод: <strong>{post.promoCode}</strong>
          </p>
        )}
        {post.validUntil && (
          <small style={{ color: "#a588c0" }}>
            Действует до: {post.validUntil}
          </small>
        )}
      </Card.Body>
    </Card>
  );
}

export default BlogCard;