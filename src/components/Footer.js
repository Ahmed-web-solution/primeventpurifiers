import React from "react";
import styled from "styled-components";
import { FaFacebookF, FaEnvelope } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaLocationDot } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
// import { hover } from '@testing-library/user-event/dist/hover';

const FooterContainer = styled.div`
  background-color: #111;
  color: white;
  padding: 40px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-around;
    // align-items: flex-start;
    text-align: left;
  }
`;

const NavItem = styled.li`
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
  transition: 0.3s;
  color: white; /* Default color white */

  &:hover {
    color: #2F7BAA; /* Hover color blue */
    text-decoration: none; /* No underline on hover */
  }

  a {
    color: inherit; /* Inherit color from NavItem */
    text-decoration: none; /* Remove underline from links */
  }
`;

const NavLinks = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 5px;
  text-align: center;

  @media (min-width: 768px) {
    flex-direction: column;
    gap: 3px;
    margin: 0;
  }
`;

// const IconWrapper = styled.div`
//   color: blue; /* Default color */
//   font-size: 24px; /* Icon size */
//   transition: color 0.3s ease; /* Smooth transition */

//   &:hover {
//     color: darkblue; /* Hover effect */
//   }
// `;

// const NavItem = styled.li`
//   font-size: 18px;
//   font-weight: bold;
//   cursor: pointer;
//   transition: 0.3s;
//   &:hover {
//     color: #2f7baa;
//     text-decoration: none;
//   }
// `;

// const GreenDiv = styled.div` 
//     width: 70px;
//     height: 5px;
//     background-color: #80d93e;
//     margin-left: 31px ;
//     border-radius: 5px;
//     margin-bottom: 20px;

//     @media (min-width: 768px) {
//     margin-bottom: 10px;
//     text-align: center;
//     // margin-left: 90px;
//     }
//      @media (min-width: 320px) {
//     margin-bottom: 10px;
//     text-align: center;
//     // margin-left: 90px;
//   }
//   } `;

const ListGreenDiv = styled.div` 
    width: 30px;
    height: 3px;
    background-color: #80d93e;
    // margin: 5px auto;
    border-radius: 5px;
    margin-left: 31px;
    margin-bottom: 10px;
  } `;

const ContactSection = styled.div`
  margin-bottom: 20px;
  text-align: center;

  @media (min-width: 768px) {
    margin-bottom: 0;
    text-align: left;
  }
  @media (min-width: 320px) {
    margin-bottom: 0;
    // text-align: center;
  }
`;

const SocialIcons = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px;
  margin-top: 20px;

  @media (min-width: 768px) {
    margin-top: 40px;
  }
`;

const IconWrapper = styled.a`
  background: white;
    // color: "#2F7BAA";
  padding: 10px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  text-decoration: none;
  transition: 0.3s;
  &:hover {
    color: "green";
  }
`;


// const Copyright = styled.div`
//   margin-top: 30px;
//   font-size: 14px;
//   opacity: 0.7;
//   width: 100%;
//   text-align: center;

//   @media (min-width: 768px) {
//     margin-top: 40px;
//   }
// `;

const Footer = () => {
  return (
    <FooterContainer>
      {/* Contact Section - Left */}
      <ContactSection>
        <h3 style={{ color: "#2F7BAA" }}>Contact Us</h3>
        {/* <GreenDiv /> */}
        <p>
          <strong>
            {" "}
            <FaLocationDot style={{ marginRight: 8, color: "#2F7BAA" }} />
            Glendale Heights, Illinois USA
          </strong>
        </p>
        <p>
          <strong>
            <IoIosMail style={{ marginRight: 8, color: "#2F7BAA" }} />{" "}
          </strong>
          <a
            href="mailto:primeventpurifiers@gmail.com"
            style={{ color: "white" }}
          >
            primeventpurifiers@gmail.com
          </a>
        </p>
        {/* <p><strong><FaPhoneAlt style={{marginRight:8}} /> </strong>
          <a href="tel:3128841308" style={{ color: 'white' }}>
            (312) 884-1308
          </a>
        </p> */}
      </ContactSection>

      <NavLinks>
  <NavItem id="home"><a href="#home">Home</a></NavItem>
  <ListGreenDiv />
  <NavItem id="services"><a href="#services">Services</a></NavItem>
  <ListGreenDiv />
  <NavItem id="about"><a href="#about">About</a></NavItem>
  <ListGreenDiv />
  <NavItem id="projects"><a href="#projects">Projects</a></NavItem>
  <ListGreenDiv />
  <NavItem id="contact"><a href="#contact">Contact Us</a></NavItem>
  <ListGreenDiv />
</NavLinks>


      {/* Social Icons - Bottom */}
      <SocialIcons>
        <IconWrapper href="https://www.facebook.com/share/1BHsnHw9dm/" target="_blank">
          <FaFacebookF />
        </IconWrapper>
        <IconWrapper href="mailto:primeventpurifiers@gmail.com">
          <FaEnvelope />
        </IconWrapper>
      </SocialIcons>

      {/* Copyright - Bottom */}
      {/* <Copyright>
        © {new Date().getFullYear()} Classic Air Duct Cleaning. All Rights Reserved.
      </Copyright> */}
    </FooterContainer>
  );
};

export default Footer;
