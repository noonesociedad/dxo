import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact.png";

const Contact = () => {
  const formInitialDetails = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  };

  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState("Send");

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setButtonText("Sending...");
    
    // Generate the Google Forms URL with the form responses
    const formURL = generateGoogleFormURL();
    
    // Open the Google Forms URL in a new tab
    window.open(formURL, "_blank");

    setButtonText("Send");
    setFormDetails(formInitialDetails);
  };

  const generateGoogleFormURL = () => {
    const formId = "1FAIpQLSfzmm9TXba2xOH1l6yWjOXbkAE9l8GJfM4UndmYIBBsTb3MWw"; // Replace with your Google Form ID
    const baseUrl = "https://docs.google.com/forms/d/e";

    // Construct the form responses URL
    const params = new URLSearchParams();
    params.append("entry.209275702", formDetails.firstName); // Replace with the actual field ID for First Name
    params.append("entry.1114839220", formDetails.lastName); // Replace with the actual field ID for Last Name
    params.append("entry.852122267", formDetails.email); // Replace with the actual field ID for Email
    params.append("entry.2129430426", formDetails.phone); // Replace with the actual field ID for Phone
    params.append("entry.994864621", formDetails.message); // Replace with the actual field ID for Message

    const formUrl = `${baseUrl}/${formId}/formResponse?${params.toString()}`;
    return formUrl;
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <img className="animate__animated animate__zoomIn" src={contactImg} alt="Contact Us" />
          </Col>
          <Col size={12} md={6}>
            <div className="animate__animated animate__fadeIn">
              <h2>Free Trial</h2>
              <form onSubmit={handleSubmit}>
                <Row>
                  <Col size={12} sm={6} className="px-1">
                    <input
                      type="text"
                      value={formDetails.firstName}
                      placeholder="First Name"
                      onChange={(e) => onFormUpdate("firstName", e.target.value)}
                    />
                  </Col>
                  <Col size={12} sm={6} className="px-1">
                    <input
                      type="text"
                      value={formDetails.lastName}
                      placeholder="Last Name"
                      onChange={(e) => onFormUpdate("lastName", e.target.value)}
                    />
                  </Col>
                  <Col size={12} sm={6} className="px-1">
                    <input
                      type="email"
                      value={formDetails.email}
                      placeholder="Email Address"
                      onChange={(e) => onFormUpdate("email", e.target.value)}
                    />
                  </Col>
                  <Col size={12} sm={6} className="px-1">
                    <input
                      type="tel"
                      value={formDetails.phone}
                      placeholder="Phone No."
                      onChange={(e) => onFormUpdate("phone", e.target.value)}
                    />
                  </Col>
                  <Col size={12} className="px-1">
                    <textarea
                      rows="6"
                      value={formDetails.message}
                      placeholder="Message"
                      onChange={(e) => onFormUpdate("message", e.target.value)}
                    ></textarea>
                    <button type="submit">
                      <span>{buttonText}</span>
                    </button>
                  </Col>
                </Row>
              </form>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
