import React from "react";
import Layouts from "../layout/index";
import Banner from "../components/banner";
import About from "../components/about";
import Menu from "../components/menu";
import WhyChooseUs from "../components/whyChooseUs";
import Gallery from "../components/gallery";
import Clients from "../components/clients";

const Home = () => {
  return (
    <Layouts>
      <Banner />
      <About />
      <Menu />
      <WhyChooseUs />
      <Gallery />
      <Clients />
    </Layouts>
  );
};

export default Home;
