import React, { useState } from "react";
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Form, Button, Spinner } from "react-bootstrap";
import bgImage from "../assets/images/email.png";


const FormWrapper = styled.div`
      min-height: 100vh;
    display: flex
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #ECF3FC;
    padding: 50px 0px;

  .heading {
    text-align: center;
    font-size: 28px;
    font-weight: bold;
    margin-bottom: 20px;
    color: #012942;
    font-size: 32px;
    font-weight: bold;
    color: rgb(47, 123, 170);
    text-align: center;
    margin-bottom: 0px;
    margin-top: 30px;
  }

  .GreenDiv {
    width: 205px;
    height: 5px;
    background-color: #80d93e;
    margin: 5px auto;
    border-radius: 5px;
    margin-bottom: 20px;
  }
  .content-wrapper {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    max-width: 900px;
    width: 100%;
    gap: 40px;
    background: #ECF3FC;
    padding: 60px 0px;
    border-radius: 10px;
  }

  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .image-section {
    width: 50%;
    max-height: 400px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .image-section img {
    width: 108%;
    object-fit: contain;
    border-radius: 10px;
  }

  .labal{
      margin-bottom: 0px;
    color: #2F7BAA;
    padding-top: 18px;
    font-weight: 100;
  }

  .form-container {
    width: 50%;
      width: 50%;
    padding: 11px;
    // color: #c52a2a;
    border-radius: 10px;
    border: 5px solid #2F7BAA;
    background-color: aliceblue;
  }

  .botn {
    background-color:rgb(33, 137, 54);
    color: white;
    border: none;
    padding: 12px;
    font-size: 15px;
  }
  .botn:hover {
    color: #176527;
    background-color: white;
    border: none;
    padding: 12px;
    font-size: 15px;
  }

  .message {
    margin-top: 10px;
    font-size: 14px;
    text-align: center;
  }

  @media (max-width: 768px) {
    .heading {
      font-size: 24px;
    }

    .content-wrapper {
      flex-direction: column;
    }
    .form-container,
    .image-section {
      width: 100%;
    }
  }
`;

const QuotationForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    number:"",
    email: "",
    acUnits:"",
    availability: "",
    details: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const response = await fetch("http://localhost:5000/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setMessage("Service request sent successfully!");
        setFormData({
          name: "",
          address: "",
          number:"",
          email: "",
          acUnits:"",
          availability: "",
          details: "",
        });
      } else {
        setMessage(result.error || "Something went wrong. Try again.");
      }
    } catch (error) {
      setMessage("Server error. Please try again later.");
    }

    setLoading(false);
  };

  return (
    <FormWrapper id="quotation-form">
      <Container>
        <h1 className="heading">REQUEST A QOUTATION</h1> {/* ✅ Added heading */}
        <div className="GreenDiv"></div>
        <div className="content-wrapper">
          <div className="image-section">
            <img src={bgImage} alt="Quotation" />
          </div>
          <div className="form-container">
            <Form onSubmit={handleSubmit}>
              <Form.Group>
                <Form.Label className="labal">Your Name *</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  placeholder="Enter your full Name"
                  required
                  onChange={handleChange}
                  value={formData.name}
                />
              </Form.Group>

              <Form.Group>
                <Form.Label className="labal">Address</Form.Label>
                <Form.Control
                  type="text"
                  name="address"
                  placeholder="Enter your full Address"
                  onChange={handleChange}
                  value={formData.address}
                />
              </Form.Group>

              <Form.Group>
                <Form.Label className="labal">Number</Form.Label>
                <Form.Control
                  type="number"
                  name="number"
                  placeholder="Enter your Number"
                  onChange={handleChange}
                  value={formData.number}
                />
              </Form.Group>

              <Form.Group>
                <Form.Label className="labal">Email Address *</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="Enter your Email"
                  required
                  onChange={handleChange}
                  value={formData.email}
                />
              </Form.Group>

              <Form.Group>
                <Form.Label className="labal">How many AC Units in your House *</Form.Label>
                <Form.Control
                  type="text"
                  name="acUnits"
                  placeholder="Enter AC Units in your House"
                  required
                  onChange={handleChange}
                  value={formData.acUnits}
                />
              </Form.Group>

              <Form.Group>
                <Form.Label className="labal">When do you require this service? *</Form.Label>
                <Form.Control
                  type="text"
                  name="availability"
                  placeholder="Your best availability"
                  required
                  onChange={handleChange}
                  value={formData.availability}
                />
              </Form.Group>

              <Form.Group>
                <Form.Label className="labal">Additional Details</Form.Label>
                <Form.Control
                  as="textarea"
                  name="details"
                  rows={3}
                  placeholder="Other details"
                  onChange={handleChange}
                  value={formData.details}
                />
              </Form.Group>

              <Button
                type="submit"
                className="w-100 mt-3 botn"
                disabled={loading}
              >
                {loading ? <Spinner animation="border" size="sm" /> : "Submit"}
              </Button>

              {message && <p className="message">{message}</p>}
            </Form>
          </div>
        </div>
      </Container>
    </FormWrapper>
  );
};

export default QuotationForm;
