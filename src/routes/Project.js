import React from "react";
import Navbar from "../components/Navbar";
import HeroImg from "../components/HeroImg";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import Work from "../components/Work";

const Project = () => {
  return (
    <div>
      <Navbar />
      <HeroSection heading="PROJECTS" text="My most recent works" />
      <Work />
      <Footer />
    </div>
  );
};

export default Project;
