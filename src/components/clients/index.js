import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { Container } from "react-bootstrap";
import { GiRoundStar } from "react-icons/gi";
import Client1 from "../../assets/images/testimonial-1.jpg";
import Client2 from "../../assets/images/testimonial-2.jpg";
import Client3 from "../../assets/images/testimonial-3.jpg";
import "swiper/css/pagination";
import "swiper/css";
import "./style.css";

const clientsData = [
  { img: Client1, name: "Frederick S. France", role: "Web Deigner" },
  { img: Client2, name: "James M. London", role: "Lawyer" },
  { img: Client3, name: "Olivia D. New York", role: "Dentist" },
];

const Clients = () => {
  return (
    <section id="clients-section">
      <Container className="py-130 position-relative overflow-hidden">
        <p className="text-uppercase section-subTitle text-center">
          Customer Feedback
        </p>
        <h3 className="Oswald_400 section-title text-center">
          What Our Clients Say
        </h3>
        <Swiper
          modules={[Pagination]}
          pagination={{ clickable: true }}
          spaceBetween={30}
          slidesPerView={1}
          speed={1000}
          loop
          breakpoints={{
            576: {
              slidesPerView: 2,
            },
            992: {
              slidesPerView: 3,
            },
            1200: {
              slidesPerView: 4,
            },
          }}
          className="testimonial-slider"
        >
          {[...clientsData, ...clientsData].map((client, index) => (
            <SwiperSlide key={index} className="">
              <div className="client-card text-center">
                <img src={client.img} alt="client" className="client-img" />
                <div className="ratings d-flex justify-content-center align-items-center">
                  {[...Array(5)].map((_, index) => (
                    <GiRoundStar key={index} />
                  ))}
                </div>
                <p>
                  Sed ut perspiciatis unde omnis natus error luptatem
                  accusantium doloremque laudantium totam remriam eaque quae
                  abillo
                </p>
                <h5>{client.name}</h5>
                <span>{client.role}</span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </section>
  );
};

export default Clients;
