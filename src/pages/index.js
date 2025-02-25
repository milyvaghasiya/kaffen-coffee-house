import React from "react";
import Layouts from "../layout/index";
import Banner from "../components/banner";
import About from "../components/about";
import Menu from "../components/menu";
import WhyChooseUs from "../components/whyChooseUs";

const Home = () => {
  return (
    <Layouts>
      <Banner />
      <About />
      <Menu />
      <WhyChooseUs />
    </Layouts>
  );
};

export default Home;
