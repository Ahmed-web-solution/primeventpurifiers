import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";
import img2 from "../assets/images/logo2-removebg-preview.png";

// Fade-in animation
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(-20);
  }
`;

// Styled Components
const StyledHeader = styled.nav`
  z-index: 10;
  left: 0;
  right: 0;
  top: 0;
  font-family: 'Montserrat', sans-serif;
  height: 100px;
  background-color: #012942;
  // padding: 0 5%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  ul {
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
  }

  li {
    margin: 0 25px;
  }

  a {
    color: #fff;
    text-decoration: none;
    font-size: 16px;
    font-weight: bold;
    transition: color 0.3s ease-in-out;

    &:hover {
      color:#83F30C; /* Text color change on hover */
    }
  }

  .contact-btn {
    background-color:#83F30C;
    color: #fff;
    padding: 10px 20px;
    border-radius: 5px;
    transition: 0.3s;
  }

  .contact-btn:hover {
    background-color: #fff;
    color: #83F30C;
  }

  @media (max-width: 768px) {
    ul {
      display: ${(props) => (props.open ? "flex" : "none")};
      position: absolute;
      top: 171px;
      left: 0;
      right: 0;
      background-color: rgba(0, 0, 0, 0.9);
      flex-direction: column;
      padding: 20px 0;
      align-items: center;
      animation: ${fadeIn} 0.5s ease-in-out;
      z-index:2;
    }

    li {
      margin: 15px 0;
    }
  }

  .burger {
    display: none;
    cursor: pointer;
  }

  .burger div {
    width: 30px;
    height: 5px;
    background-color: #fff;
    margin: 5px;
    border-radius: 3px;
    transition: all 0.5s ease-in-out;
  }

  @media (max-width: 768px) {
    .burger {
      display: block;
    }
  }
`;

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <StyledHeader open={open}>
      <img src={img2} alt="logo" width="auto" height="75" />
      
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#quotation-form">Contact Us</a></li>
        <li><Link to="/contact" className="contact-btn">GET A QUOTE</Link></li>
      </ul>

      <div className="burger" onClick={() => setOpen(!open)}>
        <div style={{ transform: open ? "rotate(45deg) translate(5px, 5px)" : "none" }}></div>
        <div style={{ opacity: open ? "0" : "1" }}></div>
        <div style={{ transform: open ? "rotate(-45deg) translate(5px, -5px)" : "none" }}></div>
      </div>
    </StyledHeader>
  );
};

export default Header;
