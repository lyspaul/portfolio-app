import React from "react";
import Navbar from "../components/Navbar";
import HeroImg from "../components/HeroImg";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import AboutContent from "../components/AboutContent";

const About = () => {
  return (
    <div>
      <Navbar />
      <HeroSection heading="ABOUT" text="I am a Full Stack Software Engineer" />
      <AboutContent />
      <Footer />
    </div>
  );
};

export default About;
