import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Menu1 from "../../assets/images/menu-1.jpg";
import Menu2 from "../../assets/images/menu-2.jpg";
import Menu3 from "../../assets/images/menu-3.jpg";
import Menu4 from "../../assets/images/menu-4.jpg";
import Menu5 from "../../assets/images/menu-5.jpg";
import Menu6 from "../../assets/images/menu-6.jpg";
import "./style.css";

const coffeeMenus = [
  {
    img: Menu1,
    name: "Americano Coffee",
    price: "$4.9",
  },
  {
    img: Menu2,
    name: "Espresso Coffee",
    price: "$4.9",
  },
  {
    img: Menu3,
    name: "Barista Pouring Syrup",
    price: "$3.5",
  },
  {
    img: Menu4,
    name: "Cold - Coffee",
    price: "$6.0",
  },
  {
    img: Menu5,
    name: "Cappuccino Arabica",
    price: "$2.8",
  },
  {
    img: Menu6,
    name: "Milk Cream Coffee",
    price: "$7.5",
  },
];

const Menu = () => {
  return (
    <section id="menu-section">
      <Container className="py-130">
        <p className="text-uppercase section-subTitle text-center">
          Choose Best Coffee
        </p>
        <h3 className="Oswald_400 section-title text-center">
          Kaffen Popular Coffee Menu
        </h3>
        <div className="coffee-menu">
          <Row>
            {coffeeMenus.map((menu, index) => (
              <Col
                key={index}
                xs={12}
                lg={6}
                className="single-menu d-flex align-items-center justify-content-center"
              >
                <div class="img-hover">
                  <img
                    src={menu.img}
                    alt="menu"
                    className="h-100 w-100 object-fit-cover"
                  />
                </div>
                <div class="img-desc">
                  <h5 className="Oswald_400">{menu.name}</h5>
                  <h4>2/3 espresso, 1/3 steamed milk</h4>
                  <h3 className="Merienda position-relative">{menu.price}</h3>
                </div>
              </Col>
            ))}
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default Menu;
