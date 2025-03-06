import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { FaAngleRight } from "react-icons/fa";
import ScrollAnimation from "../scrollAnimation";
import "./style.css";

const Booking = () => {
  return (
    <section className="booking">
      <Container>
        <Row className="justify-space-between align-items-center">
          <Col xs={12} lg={8} className="position-relative">
            <ScrollAnimation>
              <p className="text-uppercase section-subTitle">
                NEED A TABLE ON COFFEE HOUSE
              </p>
              <h3 className="Oswald_400 section-title">
                Booking Table For Your & Family Members
              </h3>
            </ScrollAnimation>
          </Col>
          <Col xs={12} lg={4} className="text-lg-end">
            <ScrollAnimation delay={0.3}>
              <Button variant="light" style={{ fontSize: "14px" }}>
                booking table <FaAngleRight />
              </Button>
            </ScrollAnimation>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Booking;
