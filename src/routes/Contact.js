import React from "react";
import Navbar from "../components/Navbar";
import HeroImg from "../components/HeroImg";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import ContactForm from "../components/ContactForm";

const Contact = () => {
  return (
    <div>
      <Navbar />
      <HeroSection
        heading="CONTACT"
        text="Get in touch with me by filling out this form"
      />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Contact;
