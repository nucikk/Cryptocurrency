import React from "react";
import Navbar from "../Component/Navbar";
import AboutSection from "../Component/AboutSection";
import Content from "../Component/Content";
// import "../Style/about.css"
import "../Style/Navbar.css";
const Home = () => {
  return (
    <>
      <Navbar />

      <AboutSection />

      <div>
        <Content />
      </div>
    </>
  );
};

export default Home;
