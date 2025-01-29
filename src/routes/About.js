import React from "react";
import Navbar from "../components/Navbar";
import HeroImg from "../components/HeroImg";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";

const About = () => {
  return (
    <div>
      <Navbar />
      <HeroSection
        heading="ABOUT"
        text="I am a software Engineer passionate
            about crafting clean, efficient, and user-centric solutions. With
            expertise in full-stack development, enterprise app solution, I
            thrive on turning ideas into reality through code."
      />
      <Footer />
    </div>
  );
};

export default About;
