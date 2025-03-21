import React from "react";
import styled from "styled-components";
import AboutUsImage from "../assets/images/furance.webp"; 
import Icon1 from "../assets/images/about-icon1.png"; 
import Icon2 from "../assets/images/about-icon2.png";
import Icon3 from "../assets/images/about-icon3.png";

const AboutUsContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: 40px;
  background-color: #f8f8f8;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    padding: 20px;
  }
`;

const GreenDiv = styled.div`
  width: 100px;
  height: 5px;
  background-color: #80D93E;
  margin: 5px auto;
  border-radius: 5px;
  margin-bottom: 20px;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: rgb(12, 97, 150);
  text-align: center;
  margin-top: 30px;
  margin-bottom: 0px;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const Description = styled.p`
  font-size: 22px;
  color: #555;
  text-align: center;
  margin-bottom: 70px;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 1200px;
  gap: 40px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 20px;
  }
`;

const ImageContainer = styled.div`
  flex: 1;
  max-width: 400px;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 100%;
    max-width: 300px; // Further reduce image size
    border-radius: 10px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  }

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

const TextContainer = styled.div`
  flex: 1;
  max-width: 500px;
  text-align: left; // Align text to the left

  h2 {
    font-size: 2rem;
    color: #333;
    margin-bottom: 20px;
  }

  p {
    font-size: 1.1rem;
    color: #555;
    line-height: 1.6;
  }

  @media (max-width: 768px) {
    text-align: center;
  }
`;

const IconsContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  max-width: 1200px;
  margin-top: 40px;
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 30px;
  }
`;

const IconItem = styled.div`
  text-align: center;
  max-width: 300px;

  img {
    width: 60px;
    height: 60px;
    margin-bottom: 15px;
  }

  h3 {
    font-size: 1.2rem;
    color:rgb(12, 97, 150);
    margin-bottom: 10px;
  }

  p {
    font-size: 1rem;
    color: #555;
  }
`;

const AboutUs = () => {
  return (
    <AboutUsContainer id="about">
      <Title>About Us</Title>
      <GreenDiv/>
      <Description>
        Ensuring Pure, Clean Air for a Healthier Home Environment
      </Description>

      <ContentWrapper>
        <ImageContainer>
          <img src={AboutUsImage} alt="About Us" />
        </ImageContainer>

        <TextContainer>
          <h2>Your Trusted Partner for Superior Duct Cleaning</h2>
          <p>
            At primevent purifiers , we provide top-quality duct cleaning to ensure your home’s air is clean and healthy. Our certified professionals use advanced equipment and eco-friendly techniques to remove dust, allergens, and contaminants. With years of experience, we prioritize your comfort and well-being. Trust [Your Company Name] for reliable and efficient duct cleaning services.
          </p>
        </TextContainer>
      </ContentWrapper>

      <IconsContainer>
        <IconItem>
          <img src={Icon1} alt="Icon 1" />
          <h3 className="clrBlue">Professional Team</h3>
          <p>Our team consists of certified professionals with years of experience.</p>
        </IconItem>

        <IconItem>
          <img src={Icon2} alt="Icon 2" />
          <h3 className="clrBlue">Eco-Friendly Solutions</h3>
          <p>We use eco-friendly techniques to ensure a safe environment.</p>
        </IconItem>

        <IconItem>
          <img src={Icon3} alt="Icon 3" />
          <h3 className="clrBlue">Advanced Equipment</h3>
          <p>We utilize the latest technology for efficient and thorough cleaning.</p>
        </IconItem>
      </IconsContainer>
    </AboutUsContainer>
  );
};

export default AboutUs;