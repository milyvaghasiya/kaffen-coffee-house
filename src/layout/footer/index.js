import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { MdOutlineLocationOn } from "react-icons/md";
import { LiaEnvelopeOpenTextSolid } from "react-icons/lia";
import { TbPhone } from "react-icons/tb";
import { FaAngleUp } from "react-icons/fa6";
import ScrollAnimation from "../../components/scrollAnimation";
import Logo from "../../assets/images/logo.png";
import Img1 from "../../assets/images/gallery-3.jpg";
import Img2 from "../../assets/images/gallery-4.jpg";
import Img3 from "../../assets/images/gallery-5.jpg";
import Img4 from "../../assets/images/gallery-1.jpg";
import Img5 from "../../assets/images/gallery-2.jpg";
import Img6 from "../../assets/images/gallery-3.jpg";
import "./style.css";

const contactList = [
  {
    icon: <MdOutlineLocationOn />,
    title: "Location :",
    desc: "55 Main Street, New York",
  },
  {
    icon: <LiaEnvelopeOpenTextSolid />,
    title: "Email Address :",
    desc: "kaffendev@gmail.com",
  },
  {
    icon: <TbPhone />,
    title: "Phone Number :",
    desc: "+012 (345) 678 99",
  },
];

const Footer = () => {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <Container className="footer">
      <Row className="align-items-start">
        <Col xs={12} md={6} lg={3}>
          <ScrollAnimation>
            <img src={Logo} alt="Logo" height="40" width="118" />
          </ScrollAnimation>
        </Col>
        <Col xs={12} md={6} lg={3} className="working-hours-col">
          <ScrollAnimation delay={0.3}>
            <h5 className="Oswald_400 footer-title">Working Hours</h5>
            <ul className="p-0 m-0">
              <li>
                <h3 className="m-0">Sunday - Thursday</h3>
                <p>08:00 am - 09:00pm</p>
              </li>
              <li>
                <h3 className="m-0">Only Friday</h3>
                <p>03:00 pm - 09:00pm</p>
              </li>
              <li>
                <strong className="Merienda">Saturday Close</strong>
              </li>
            </ul>
          </ScrollAnimation>
        </Col>
        <Col xs={12} md={6} lg={3} className="contact-us-col">
          <ScrollAnimation delay={0.6}>
            <h5 className="Oswald_400 footer-title">Contact Us</h5>
            <ul className="p-0 m-0">
              {contactList.map((contact, index) => (
                <li key={index} className="d-flex align-items-center">
                  {contact.icon}
                  <div>
                    <h3 className="m-0">{contact.title}</h3>
                    <p className="m-0">{contact.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </ScrollAnimation>
        </Col>
        <Col xs={12} md={6} lg={3} className="gallery-col">
          <ScrollAnimation delay={0.9}>
            <h5 className="Oswald_400 footer-title">Gallery</h5>
            <ul className="p-0 m-0">
              {[Img1, Img2, Img3, Img4, Img5, Img6].map((img, index) => (
                <li key={index}>
                  <img
                    src={img}
                    alt="footer-img"
                    className="object-fit-cover w-100"
                  />
                </li>
              ))}
            </ul>
          </ScrollAnimation>
        </Col>
      </Row>
      <div className="copyright-row text-center">
        Copyright © 2022 Kaffen. All Rights Reserved
      </div>
      <Button onClick={handleScrollToTop}>
        <FaAngleUp />
      </Button>
    </Container>
  );
};

export default Footer;
