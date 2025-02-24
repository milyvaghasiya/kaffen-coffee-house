import React from "react";
import Layouts from "../layout/index";
import Banner from "../components/banner";
import About from "../components/about";
import Menu from "../components/menu";

const Home = () => {
  return (
    <Layouts>
      <Banner />
      <About />
      <Menu />
    </Layouts>
  );
};

export default Home;
