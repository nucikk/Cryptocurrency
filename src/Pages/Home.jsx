import React from "react";
import Navbar from "../Component/Navbar";
import AboutSection from "../Component/AboutSection";
import Content from "../Component/Content";
// import "../Style/about.css"
import "../Style/Navbar.css";
import Footer from "../Component/Footer";
const Home = () => {
  return (
    <>
      <Navbar />
      <div>
        <AboutSection />
      </div>
    </>
  );
};

export default Home;
