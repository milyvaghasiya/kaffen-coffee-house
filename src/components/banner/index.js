import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { Container, Button } from "react-bootstrap";
import { FaAngleRight } from "react-icons/fa6";
import Banner1 from "../../assets/images/banner-1.jpg";
import Banner2 from "../../assets/images/banner-2.jpg";
import Banner3 from "../../assets/images/banner-3.jpg";
import "swiper/css";
import "swiper/css/navigation";
import "./style.css";

const slides = [
  {
    image: Banner1,
    title: "The London <br /> Coffee House",
  },
  {
    image: Banner2,
    title: "The Paris <br /> Coffee House",
  },
  {
    image: Banner3,
    title: "Great Coffee <br /> Good Vibes",
  },
];

const Banner = () => {
  return (
    <section id="home-section">
      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        navigation={{
          nextEl: ".next-btn",
          prevEl: ".prev-btn",
        }}
        autoplay={{ delay: 3000 }}
        speed={2000}
        loop
        className="banner-slider"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="position-relative">
              <img
                src={slide.image}
                alt="banner"
                className="slider-image w-100"
              />
              <div className="swiper-content position-absolute top-0 left-0 w-100 h-100">
                <Container className="d-flex justify-content-center flex-column h-100">
                  <span className="text-uppercase">Welcome to the Kaffen</span>
                  <h2 dangerouslySetInnerHTML={{ __html: slide.title }} />
                  <div className="button-slider d-flex flex-wrap">
                    <Button variant="light" style={{ fontSize: "14px" }}>
                      Explore More <FaAngleRight />
                    </Button>
                    <Button className="text-uppercase get-delivery-btn">
                      Get Delivery <FaAngleRight />
                    </Button>
                  </div>
                </Container>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="prev-btn" />
      <div className="next-btn" />
    </section>
  );
};

export default Banner;
