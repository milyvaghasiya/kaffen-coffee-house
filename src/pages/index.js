import React from "react";
import Layouts from "../layout/index";
import Banner from "../components/banner";
import About from "../components/about";
import Menu from "../components/menu";
import WhyChooseUs from "../components/whyChooseUs";
import Gallery from "../components/gallery";
import Clients from "../components/clients";
import Counter from "../components/counter";
import Blog from "../components/blog";

const Home = () => {
  return (
    <Layouts>
      <Banner />
      <About />
      <Menu />
      <WhyChooseUs />
      <Gallery />
      <Clients />
      <Counter />
      <Blog />
    </Layouts>
  );
};

export default Home;
