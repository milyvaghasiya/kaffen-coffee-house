import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Container } from "react-bootstrap";
import Gallery1 from "../../assets/images/gallery-1.jpg";
import Gallery2 from "../../assets/images/gallery-2.jpg";
import Gallery3 from "../../assets/images/gallery-3.jpg";
import Gallery4 from "../../assets/images/gallery-4.jpg";
import Gallery5 from "../../assets/images/gallery-5.jpg";
import "swiper/css";
import "./style.css";

const gallerySlides = [
  { img: Gallery1, title: "Iced Coffee" },
  { img: Gallery2, title: "Espresso" },
  { img: Gallery3, title: "Black Coffee" },
  { img: Gallery4, title: "Latte" },
  { img: Gallery5, title: "Cappuccino" },
];

const Gallery = () => {
  return (
    <section id="gallery-section" className="py-130">
      <Container>
        <p className="text-uppercase section-subTitle text-center">
          Check out some of our hot drinks at the cafe
        </p>
        <h3 className="Oswald_400 section-title text-center">Our Gallery</h3>
      </Container>
      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        speed={2000}
        loop
        breakpoints={{
          576: {
            slidesPerView: 3,
          },
          992: {
            slidesPerView: 5,
          },
        }}
        className="gallery-slider"
      >
        {[...gallerySlides, ...gallerySlides].map((slide, index) => (
          <SwiperSlide key={index} className="gallery-slide">
            <div className="position-relative w-100 gallery-item">
              <img
                src={slide.img}
                alt="gallery"
                className="w-100 h-100 position-relative object-fit-cover"
              />
              <div className="gallery-desc d-flex align-items-center justify-content-center flex-column">
                <h4 className="Oswald_400 m-0">{slide.title}</h4>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Gallery;
