import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { FaAngleRight } from "react-icons/fa";
import WhyChoose from "../../assets/images/why-choose-img.jpg";
import Img1 from "../../assets/images/why-choose-item-1.jpg";
import Img2 from "../../assets/images/why-choose-item-2.jpg";
import Vector1 from "../../assets/images/why-choose-vector-1.png";
import Vector2 from "../../assets/images/why-choose-vector-3.png";
import Vector3 from "../../assets/images/why-choose-vector-2.png";
import "./style.css";

const listings = [
  { img: Img1, title: "Natural Coffee Beans" },
  { img: Img2, title: "100% ISO Certification" },
];

const WhyChooseUs = () => {
  return (
    <div className="py-130 position-relative overflow-hidden">
      <Container>
        <img
          src={Vector1}
          alt="why-choose-vector"
          className="vector-1 object-fit-cover"
        />
        <img
          src={Vector2}
          alt="why-choose-vector"
          className="vector-2 object-fit-cover"
        />
        <img
          src={Vector3}
          alt="why-choose-vector"
          className="vector-3 object-fit-cover"
        />
        <Row>
          <Col xs={12} lg={6} className="text-center">
            <img
              src={WhyChoose}
              alt="why-choose"
              className="why-choose-img w-100 object-fit-cover"
            />
          </Col>
          <Col xs={12} lg={5} className="why-choose-content offset-lg-1">
            <p className="text-uppercase section-subTitle">Why Choose Us</p>
            <h3 className="Oswald_400 section-title">
              New London Coffee Founded For Extraordinary Test
            </h3>
            <p className="desc">
              Sed ut perspiciatis unde omnis iste natus error voluptate
              accusantium doloremque laudantium, totam rem aperiam eaque ipsa
              quae abillo inventore veritatis
            </p>
            <div className="listings-content">
              {listings.map((list, index) => (
                <div key={index} class="list d-flex">
                  <img
                    src={list.img}
                    alt="choose-item"
                    className="h-100 object-fit-cover"
                  />
                  <div>
                    <h5 className="Oswald_400">{list.title}</h5>
                    <p>
                      Sed ut perspiciatis unde omnis iste natus error voluptate
                      accusantium doloremque
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <Button variant="light" style={{ fontSize: "14px" }}>
              Explore More <FaAngleRight />
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default WhyChooseUs;
