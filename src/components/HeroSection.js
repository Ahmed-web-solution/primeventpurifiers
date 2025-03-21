import React from "react";
import styled from "styled-components";
import { Carousel } from "react-bootstrap";
import Slider1 from '../assets/images/ductjpg.jpg'
import Slider2 from '../assets/images/ac-cleaner.jpg'
import Slider3 from '../assets/images/furance.webp'



const Section = styled.section`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color:#e5e5e5;

  .container-fluid {
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;
  }

  .cleaning{
  color: #83F30C;
  }

  .heading-hero{
  color:black;
  }

  .row {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    margin: 0;
  }

  /* ✅ Left Side: Text */
  .text-container {
    width: 50%;
    padding: 50px;
    color: white;
    text-align: left;
  }

  /* ✅ Responsive Text */
  .text-container h1 {
    font-size: 4rem;
    font-weight: bold;
  }

  .text-container p {
    font-size: 1.2rem;
  }

  /* ✅ Right Side: Carousel */
  .carousel-container {
    width: 50%;
    padding: 20px;
  }

  .carousel-item img {
    width: 100%;
    height: 80vh;
    object-fit: cover;
    border-radius: 10px;
  }

  /* ✅ Media Queries for Responsive Design */
  @media (max-width: 992px) {
    .text-container {
      width: 100%;
      text-align: center;
      padding: 30px;
    }
    .text-container h1 {
      font-size: 2.5rem;
    }
    .text-container p {
      font-size: 1rem;
    }
    .carousel-container {
      width: 100%;
    }
  }

  @media (max-width: 768px) {
    .text-container h1 {
      font-size: 2rem;
    }
    .text-container p {
      font-size: 0.9rem;
    }
  }

  @media (max-width: 576px) {
    .row {
      flex-direction: column;
    }
    .text-container {
      width: 100%;
      padding: 20px;
      text-align: center;
    }
    .text-container h1 {
      font-size: 1.8rem;
    }
    .text-container p {
      font-size: 0.8rem;
    }
    .carousel-container {
      width: 100%;
      padding: 20px;
    }
    .carousel-item img {
      height: 50vh;
    }
  }
`;

const HeroSection = () => {
  return (
    <Section>
      <div className="container header vh-100 vw-100 d-flex align-items-center justify-content-center">
        <div className="row">
          
          {/* ✅ Left Side: Text */}
          <div className="text-container">
          <p className="cleaning">// Cleaning Services</p>

            <h1 className="heading-hero">Looking For an <br/> Skilled Cleaners </h1>
            <p className="heading-hero">Your health is our priority. Get the best medical services here.</p>
          </div>

          {/* ✅ Right Side: Carousel */}
          <div className="carousel-container">
            <Carousel>
              <Carousel.Item>
                <img className="d-block w-100" src={Slider1} alt="clean" />
              </Carousel.Item>

              <Carousel.Item>
                <img className="d-block w-100" src={Slider2} alt="clean" />
              </Carousel.Item>

              <Carousel.Item>
                <img className="d-block w-100" src={Slider3} alt="cleaning" />
              </Carousel.Item>
            </Carousel>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default HeroSection;