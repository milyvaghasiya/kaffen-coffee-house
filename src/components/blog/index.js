import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { FaCalendarAlt, FaRegComments } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa6";
import Blog1 from "../../assets/images/blog-1.jpg";
import Blog2 from "../../assets/images/blog-2.jpg";
import Blog3 from "../../assets/images/blog-3.jpg";
import "./style.css";

const blogs = [
  {
    img: Blog1,
    name: "SWR React Hooks With Next Increm Ental Static Regeneration",
  },
  {
    img: Blog2,
    name: "Decisions For Building Flexible Components DevTools Browser",
  },
  {
    img: Blog3,
    name: "SWR React Hooks With Next Increm Ental Static Regeneration",
  },
];

const Blog = () => {
  return (
    <section id="blog-section">
      <Container className="py-130">
        <Row className="blog-row">
          {blogs.map((blog, index) => (
            <Col xs={12} sm={6} lg={4} key={index}>
              <div className="position-relative blog-item">
                <img
                  src={blog.img}
                  alt="blog"
                  className="w-100 h-100 position-relative object-fit-cover"
                />
                <div className="blog-desc">
                  <h5 className="Oswald_400">{blog.name}</h5>
                  <div class="date-comment d-flex flex-wrap align-items-center">
                    <h3>
                      <FaCalendarAlt /> 25 Sep 2021
                    </h3>
                    <h3>
                      <FaRegComments /> Comments (7)
                    </h3>
                  </div>
                </div>
              </div>
            </Col>
          ))}
        </Row>
        <div className="text-center">
          <Button variant="light" style={{ fontSize: "14px" }}>
            View All <FaAngleRight />
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default Blog;
