import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import courseImg1 from "../assets/img/web-dev.png";
import courseImg2 from "../assets/img/data-sci.png";
import courseImg3 from "../assets/img/data-ana.png";
import CourseCard from "./CourseCard";

const coursesData = [
  {
    id: "01",
    title: "Web Development(Certificate + Internship) Course",
    duration: 3,
    students: 1.5,
    rating: 4.9,
    imgUrl: courseImg1,
  },
  {
    id: "02",
    title: "Data Science(Certificate + Internship) Course",
    duration: 3,
    students: 1.7,
    rating: 4.9,
    imgUrl: courseImg2,
  },
  {
    id: "03",
    title: "Data Analyst(Certificate + Internship) Course",
    duration: 2,
    students: 1.1,
    rating: 4.5,
    imgUrl: courseImg3,
  },
];

const Courses = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 3
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section id="courses" className="mt-4">
      <Container>
        <Row>
          <Col lg="12" className="mb-5">
            <div className="course__top d-flex justify-content-between align-items-center">
              <div className="course__top__left w-50">
                <h2 >Our Popular Courses</h2>
                <p >
                  Embark on a Transformative learning journey with our internship+certified course. Designed to empower you with real world skill for a successful career. Gain practical experience and industry Recognized certification while unloacking endless possibilities for professional growth.
                </p>
              </div>
            </div>
          </Col>

          <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme ">
            {coursesData.map((item) => (
              <Col lg="10" md="9" sm="9" key={item.id}>
                <CourseCard item={item} />
              </Col>
            ))}
          </Carousel>
        </Row>
      </Container>
    </section>
  );
};

export default Courses;