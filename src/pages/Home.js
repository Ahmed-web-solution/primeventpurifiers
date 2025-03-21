import React from "react";
import HeroSection from "../components/HeroSection";
import Services from "../components/Services";
import AboutUs from "../components/AboutUs";
import Stats from "../components/Stats";
import QuotationForm from "../components/QuotationForm";
import Skills from "../components/Skills";

const Home = () => {
  return (
    <div id="home">
      <HeroSection />
      <Services />
      <AboutUs />
      <Stats />
      <QuotationForm />
      <Skills />
    </div>
  );
};

export default Home;
