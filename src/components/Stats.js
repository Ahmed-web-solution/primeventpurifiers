import React from "react";
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import { FaHeadset, FaAward, FaUsers, FaFileAlt } from "react-icons/fa";
import bgImage from "../assets/images/rattinggimage.jpg";

const StatsSection = styled.section`
//   background: #0f3b4a;
background: url(${bgImage});
background-size: cover;
// background-position: center;   
// filter: brightness(50%); 

  padding: 50px 0;
  color: #fff;
  text-align: center;
  
  .icon {
    font-size: 50px;
    margin-bottom: 10px;
    color: #87FE04;
  }
  
  .stat-number {
    font-size: 26px;
    font-weight: bold;
  }
  
  .stat-text {
    font-size: 18px;
    font-weight: 500;
  }
`;

const statsData = [
  { icon: <FaHeadset />, number: "24/7", text: "Helpline Service" },
  { icon: <FaAward />, number: "4000+", text: "Successful Projects" },
  { icon: <FaFileAlt />, number: "250", text: "Expert Employee" },
  { icon: <FaUsers />, number: "40+", text: "States Served" },
];

function Stats() {
  return (
    <StatsSection id="projects">
      <Container>
        <Row>
          {statsData.map((stat, index) => (
            <Col key={index} xs={12} sm={6} md={3} className="mb-4">
              <div className="icon">{stat.icon}</div>
              <div className="stat-number">{stat.number}</div>
              <div className="stat-text">{stat.text}</div>
            </Col>
          ))}
        </Row>
      </Container>
    </StatsSection>
  );
};

export default Stats;
