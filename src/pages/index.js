import React from "react";
import Layouts from "../layout/index";
import Banner from "../components/banner";
import About from "../components/about";

const Home = () => {
  return (
    <Layouts>
      <Banner />
      <About />
    </Layouts>
  );
};

export default Home;
