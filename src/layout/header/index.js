import React, { useEffect, useState } from "react";
import { Row, Col, Navbar, Nav, Button } from "react-bootstrap";
import {
  FaRegClock,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { IoLogoYoutube } from "react-icons/io";
import { MdMenu, MdClose } from "react-icons/md";
import Logo from "../../assets/images/logo.png";
import "./style.css";

const menuItems = [
  { sectionId: "home-section", title: "Home" },
  { sectionId: "about-section", title: "About" },
  { sectionId: "menu-section", title: "Menu" },
  { sectionId: "gallery-section", title: "Gallery" },
  { sectionId: "clients-section", title: "Clients" },
  { sectionId: "blog-section", title: "Blog" },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [activeMenu, setActiveMenu] = useState("Home");

  const handleSmoothScroll = (e, target) => {
    e.preventDefault();
    document.querySelector(target)?.scrollIntoView({ behavior: "smooth" });
  };

  const handleScroll = () => {
    setIsSticky(window.scrollY > 300);

    menuItems.forEach(({ sectionId, title }) => {
      const section = document.getElementById(sectionId);
      if (section) {
        const { top, bottom } = section.getBoundingClientRect();
        if (top <= 100 && bottom >= 100) {
          setActiveMenu(title);
        }
      }
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header>
      <div className="top_header">
        <Row className="justify-content-between align-items-center text-uppercase">
          <Col className="d-flex align-items-center text-white top_header_title">
            <FaRegClock color="#b99272" size={14} />
            <p className="mb-0">Opening Hours :</p>
            <span>08:00 am - 09:00 pm</span>
          </Col>
          <Col className="d-flex justify-content-center">
            {[
              <FaFacebookF className="facebook" />,
              <FaTwitter />,
              <FaInstagram />,
              <IoLogoYoutube />,
            ].map((icon, index) => (
              <a
                key={index}
                href="/"
                className="text-decoration-none px-2 text-white social_icon"
              >
                {icon}
              </a>
            ))}
          </Col>
          <Col className="d-flex align-items-center justify-content-end text-white top_header_title">
            <IoLocationSharp color="#b99272" size={16} />
            <p className="mb-0">Location :</p>
            <span>55 Main Street, New York</span>
          </Col>
        </Row>
      </div>

      <Navbar
        expand="lg"
        className={`main_header ${isSticky ? "sticky-header" : ""}`}
      >
        <Navbar.Brand href="#home">
          <img src={Logo} alt="Logo" height="40" width="118" />
        </Navbar.Brand>

        <Navbar.Toggle onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <MdClose size={30} /> : <MdMenu size={30} />}
        </Navbar.Toggle>
        <Navbar.Collapse in={menuOpen}>
          <Nav className="mx-auto">
            {menuItems.map((menu, index) => (
              <Nav.Link
                key={index}
                href={`#${menu?.sectionId}`}
                className={`text-uppercase mx-2 ${
                  activeMenu === menu.title ? "active" : "text-white"
                }`}
                onClick={(event) => {
                  handleSmoothScroll(event, `#${menu?.sectionId}`);
                  setMenuOpen(false);
                }}
              >
                {menu.title}
              </Nav.Link>
            ))}
          </Nav>
          <div className="text-center">
            <Button
              variant="light"
              style={{
                backgroundColor: "#b99272",
                color: "#fff",
                fontWeight: 500,
                borderRadius: "5px",
              }}
            >
              Book a Table
            </Button>
          </div>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
};

export default Header;
