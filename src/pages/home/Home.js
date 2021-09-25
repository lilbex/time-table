import React from "react";
import Navigation from "../../components/navbar/Navbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Carousel from "react-bootstrap/Carousel";
import SingleClass from "../../components/timetable/singleclass/SingleClass";
import AllSubject from "../../components/timetable/days/AllSubject";
import "./styles.css"

export default function HomePage() {
  return (
    <>
      <Navigation />
      <Container className="container" >
        <Row>
          <SingleClass />
          <AllSubject />
        </Row>
      </Container>
      
    </>
  );
}

