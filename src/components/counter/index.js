import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./style.css";

const counterData = [
  { count: "256", title: "Premium Clients" },
  { count: "362", title: "Expert Members" },
  { count: "753", title: "Winning Awards" },
];

const Counter = () => {
  return (
    <section className="counter-section">
      <Container>
        <Row className="counter-row">
          {counterData.map((count, index) => (
            <Col
              xs={12}
              md={6}
              lg={4}
              key={index}
              className="counter-card d-flex align-items-center"
            >
              <h1 className="Oswald_300 m-0">{count.count}+</h1>
              <div>
                <h5 className="Oswald_400">{count.title}</h5>
                <h4 className="m-0">Sed ut perspiciatis unde</h4>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Counter;
