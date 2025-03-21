import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Contact from "./pages/Contact"; // Ensure this component exists
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import styled from "styled-components";
import { FaEnvelope, FaFacebookF } from "react-icons/fa";
import Services from "./components/Services";
import AboutUs from "./components/AboutUs";
import Stats from "./components/Stats";
import QuotationForm from "./components/QuotationForm";

const Section = styled.section`
  .top-bar {
    width: 100%;
    height: 40px;
    background-color: #ccc;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 20px;

    @media (max-width: 768px) {
      flex-direction: column;
      height: auto;
      padding: 10px 0;
      text-align: center;
    }
  }

  .email-link {
    color: rgb(15, 72, 132);
    text-decoration: none;
    font-weight: bold;
  }

  .email-link:hover {
    color: rgb(35, 187, 18);
  }

  .contact-info {
    display: flex;
    width: 100%;
    max-width: 1200px;
    justify-content: space-between;
    align-items: center;
    font-size: 14px;
    color: #333;
    gap: 10px;

    @media (max-width: 768px) {
      flex-direction: column;
      gap: 5px;
    }
  }

  .clr {
    color: rgb(15, 72, 132);
  }

  .clr:hover {
    color: rgb(35, 187, 18);
  }

  .social-icons {
    display: flex;
    justify-content: flex-end;
    gap: 10px;
  }

  .social-icons a {
    color: #333;
    font-size: 18px;
  }
`;

const App = () => {
  return (
    <Router>
      <Section>
        <div className="top-bar">
          <div className="contact-info">
            <div className="email">
              <a className="email-link" href="mailto:primeventpurifiers@gmail.com">
                📧 primeventpurifiers@gmail.com
              </a>
            </div>
            <div className="social-icons">
              <a href="mailto:email@example.com">
                <FaEnvelope className="clr" />
              </a>
              <a href="https://www.facebook.com/share/1BHsnHw9dm" target="_blank" rel="noopener noreferrer">
                <FaFacebookF className="clr" />
              </a>
            </div>
          </div>
        </div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/aboutUs" element={<AboutUs />} />
          <Route path="/stats" element={<Stats />} />
          <Route path="/QuotationForm" element={<QuotationForm />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </Section>
    </Router>
  );
};

export default App;
