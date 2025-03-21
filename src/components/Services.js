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
    title: "Duct Cleaning",
    text: "We offer professional duct cleaning services to enhance your home’s air quality.",
    image: "https://classicairductcleaning.com/wp-content/uploads/2024/06/duct.png",
  },
  {
    title: "Vents Cleaning",
    text: "Reliable and efficient vents cleaning services, always.",
    image: "https://classicairductcleaning.com/wp-content/uploads/2024/06/air.png",
  },
  {
    title: "Dryer Vent Cleaning",
    text: "Prevent fire hazards with our thorough and expert dryer vent cleaning.",
    image: "https://classicairductcleaning.com/wp-content/uploads/2024/06/lint.png",
  },
  {
    title: "Furnace Cleaning",
    text: "Trust us to keep your furnace running smoothly with our thorough cleaning.",
    image: "https://classicairductcleaning.com/wp-content/uploads/2024/06/furnace-1.png",
  },
  {
    title: "Chimney Cleaning",
    text: "Ensure your chimney is clean and safe with our expert cleaning services.",
    image: "https://classicairductcleaning.com/wp-content/uploads/2024/06/blower.png",
  },
  {
    title: "Air Duct Sanitizing",
    text: "Sanitize your air ducts to eliminate bacteria and allergens.",
    image: "https://classicairductcleaning.com/wp-content/uploads/2024/06/left-arrow.png",
  },
  {
    title: "HVAC Maintenance",
    text: "Regular maintenance to keep your HVAC system running efficiently.",
    image: "https://classicairductcleaning.com/wp-content/uploads/2024/06/ac.png",
  },
  {
    title: "Indoor Air Quality Testing",
    text: "Test and improve the air quality inside your home.",
    image: "https://classicairductcleaning.com/wp-content/uploads/2024/06/menu-1.png",
  },
];

const Services = () => {
  return (
    <Container id="services">
      <Title>OUR SERVICES</Title>
      <GreenDiv />
      <Subtitle>Choose our services for impeccable cleanliness and comfort</Subtitle>

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

export default Services;