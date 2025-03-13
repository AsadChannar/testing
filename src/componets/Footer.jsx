import React from 'react'
import Row from 'react-bootstrap/esm/Row'
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import logo from '../images/tef-footer-logo.png'

export default function Footer() {
  return (
    <>
    <div className='footer-wrapper'>
    <Container >
      <Row className='info' >
        <Col md={6} >
        <img src={logo} />

        <p>
        - is an organization with a mandate to improve quality of education in rural areas of Southern Punjab.
        </p>
        </Col>
        <Col md={3}  classNam="widgettitle">
        <h3>Quick Links</h3>
            <ul className="list-arrow">
              <li><a href="#">About Us</a></li>
              <li><a href="#">Our Initiatives</a></li>
              <li><a href="#">Social Gallery</a></li>
              <li><a href="#">Downloads</a></li>
              <li><a href="#">Contact Us</a></li>
            </ul>
          
        </Col>
      <Col md={3} className="widget-title">
      <h3 >Secondary Links</h3>
            <ul className="list-arrow">
              <li><a href="#">Site Map</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Login</a></li>
            </ul>
        </Col>
      </Row>
    </Container>
    </div>
     

    </>
  )
}
