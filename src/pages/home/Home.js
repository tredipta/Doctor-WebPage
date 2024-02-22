import React from "react";
import About from "../shared/About";
import Therapists from "./Therapists";
import Banner from "./Banner";

const Home = () => {
  return (
    <div>
      <Banner />
      <About />
      <Therapists />
    </div>
  );
};

export default Home;
