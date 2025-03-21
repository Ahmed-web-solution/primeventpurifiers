import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  background-color: rgb(240, 240, 240);
`;

const Title = styled.div`
  font-size: 32px;
  font-weight: bold;
  color:rgb(12, 97, 150);
  text-align: center;
  margin-bottom: 0px;
  margin-top: 30px;
`;

const Subtitle = styled.div`
  font-size: 22px;
  color: #333;
  text-align: center;
  margin-bottom: 42px;
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  width: 85%;
  max-width: 1200px;
  justify-content: center;
  margin-bottom: 60px;
`;

const ServiceBox = styled.div`
  width: 250px;
  height: 300px;
  background: #f8f8f8;
  padding: 20px;
  text-align: center;
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 18px 0px;
`;

const ServiceImg = styled.div`
  width: 80px;
  height: 80px;
  margin: 0 auto 15px;
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
`;

const ServiceTitle = styled.div`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 0px;
  position: relative;
  color: rgb(12, 97, 150);
`;

const BlueDiv = styled.div`
  width: 50px;
  height: 5px;
  background-color: #80D93E;
  margin: 5px auto;
  border-radius: 5px;

`;

const GreenDiv = styled.div`
  width: 100px;
  height: 5px;
  background-color: #80D93E;
  margin: 5px auto;
  border-radius: 5px;
  margin-bottom: 20px;
`;

const ServiceText = styled.div`
  font-size: 14px;
  color: #555;
  margin-top: 10px;
`;

const servicesData = [
  {
    title: "Thorough Inspection",
    text: "We inspect every duct thoroughly for tailored cleaning.",
    image: "https://classicairductcleaning.com/wp-content/themes/one-business-blocks/images/icon1.png",
  },
  {
    title: "Certified Professionals",
    text: "Our team consists of certified duct cleaning experts.",
    image: "https://classicairductcleaning.com/wp-content/themes/one-business-blocks/images/icon2.png",
  },
  {
    title: "Eco-Friendly Solutions",
    text: "Our methods are eco-friendly and sustainable.",
    image: "https://classicairductcleaning.com/wp-content/themes/one-business-blocks/images/icon3.png",
  },
  {
    title: "Comprehensive Cleaning",
    text: "We clean air ducts, vents, and return lines comprehensively.",
    image: "https://classicairductcleaning.com/wp-content/themes/one-business-blocks/images/icon3.png",
  },
  {
    title: "State-of-the-Art Equipment",
    text: "We use cutting-edge tools for efficient cleaning.",
    image: "https://classicairductcleaning.com/wp-content/themes/one-business-blocks/images/icon5.png",
  },
  {
    title: "Advanced Techniques",
    text: "“We employ advanced techniques for superior and lasting cleanliness.",
    image: "https://classicairductcleaning.com/wp-content/themes/one-business-blocks/images/icon6.png",
  },
  {
    title: "Business Growth",
    text: "Bringing our expertise worldwide, ensuring clean air knows no boundaries.",
    image: "https://classicairductcleaning.com/wp-content/themes/one-business-blocks/images/icon7.png",
  },
  {
    title: "Customer Satisfaction",
    text: "We prioritize satisfaction for a pleasant experience.",
    image: "https://classicairductcleaning.com/wp-content/themes/one-business-blocks/images/icon8.png",
  },
];

const Skills = () => {
  return (
    <Container>
      <Title>OUR SKILLS</Title>
      <GreenDiv />
      <Subtitle>Explore the Comprehensive Expertise of Our Duct Cleaning Services</Subtitle>

      <ServicesGrid>
        {servicesData.map((service, index) => (
          <ServiceBox key={index}>
            <ServiceImg style={{ backgroundImage: `url(${service.image})` }} />
            <ServiceTitle>
              {service.title}
              <BlueDiv />
            </ServiceTitle>
            <ServiceText>{service.text}</ServiceText>
          </ServiceBox>
        ))}
      </ServicesGrid>
    </Container>
  );
};

export default Skills;