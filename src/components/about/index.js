import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { RiRestaurantLine } from "react-icons/ri";
import { LiaCoffeeSolid, LiaGlassCheersSolid } from "react-icons/lia";
import ScrollAnimation from "../scrollAnimation";
import Profile from "../../assets/images/profile.png";
import AboutUs from "../../assets/images/about.png";
import Service1 from "../../assets/images/about-menu1.jpg";
import Service2 from "../../assets/images/about-menu2.jpg";
import Service3 from "../../assets/images/about-menu3.jpg";
import "./style.css";

const aboutServices = [
  { img: Service1, icon: <RiRestaurantLine />, title: "Restaurant Menu" },
  { img: Service2, icon: <LiaCoffeeSolid />, title: "Coffee Menu" },
  { img: Service3, icon: <LiaGlassCheersSolid />, title: "Food Services" },
];

const About = () => {
  return (
    <section id="about-section">
      <Container className="py-130 overflow-hidden">
        <Row>
          <Col xs={12} lg={5}>
            <ScrollAnimation>
              <p className="text-uppercase section-subTitle">About Us</p>
            </ScrollAnimation>
            <ScrollAnimation>
              <h3 className="Oswald_400 section-title">
                Organic & Fresh Coffee <br /> Provider Center
              </h3>
            </ScrollAnimation>
            <ScrollAnimation>
              <p className="content">
                Sed ut perspiciatis unde omnis iste natus error voluptate
                accusantium doloremque laudantium, totam rem aperiam eaque ipsa
                quae abillo inventore veritatis et quasi architecto beatae vitae
                dicta sunt explicabo. Nemo enim ipsluptatem quia voluptas sit
                aspernatur aut odit aut fugit sed quia consequuntur magni
                dolores eos qui ratione
              </p>
            </ScrollAnimation>
            <ScrollAnimation>
              <div className="quote d-flex align-items-center">
                <img src={Profile} alt="profile" />
                <p className="font-italic m-0">
                  Quis autem vel eum iure reprehenderit in ealuptate velit esse
                  molestiae
                </p>
              </div>
            </ScrollAnimation>
          </Col>
          <Col xs={12} lg={7} className="text-center">
            <div className="about-img">
              <ScrollAnimation delay={0.2}>
                <img src={AboutUs} alt="about" />
              </ScrollAnimation>
            </div>
          </Col>
        </Row>
        <Row className="about-services">
          {aboutServices.map((service, index) => (
            <Col xs={12} md={6} lg={4} key={index}>
              <ScrollAnimation delay={0.3 * index}>
                <div className="position-relative w-100 service-item">
                  <img
                    src={service.img}
                    alt="service"
                    className="w-100 h-100 position-relative object-fit-cover"
                  />
                  <div className="service-desc d-flex align-items-center justify-content-center flex-column">
                    {service.icon}
                    <h4 className="Oswald_400 m-0">{service.title}</h4>
                  </div>
                </div>
              </ScrollAnimation>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default About;
