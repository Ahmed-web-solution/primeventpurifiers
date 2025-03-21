import React from "react";
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";

const StyledFooter = styled.footer`
  background-color: #343a40;
  color: white;
  text-align: center;
  padding: 1rem 0;
  position: fixed;
  bottom: 0;
  width: 100%;
`;

const Footer = () => {
  return (
    <StyledFooter>
      <div className="container">
        <p>&copy; {new Date().getFullYear()} MyWebsite. All rights reserved.</p>
      </div>
    </StyledFooter>
  );
};

export default Footer;
