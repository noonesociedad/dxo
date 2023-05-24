import { Container, Row, Col } from "react-bootstrap";
import navIcon1 from "../assets/img/linkedin.svg";
import navIcon2 from "../assets/img/instagram.svg";
import navIcon3 from "../assets/img/github.svg";

const Footer = () => {
  return (
    <footer className="footer mt-3" >
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            Drop <span style={{fontSize:"30px"}}>X</span> Out
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon mb-3">
              <a href="https://www.linkedin.com/company/dropxout/" target="_blank"><img src={navIcon1} alt="Icon" /></a>
              <a href="https://www.instagram.com/drop_x_out/" target="_blank"><img src={navIcon2} alt="Icon" /></a>
              <a href="https://github.com/Drop-X-Out" target="_blank"><img src={navIcon3} alt="Icon" /></a>
            </div>
            <p >Copyright 2022. Drop X Out</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer