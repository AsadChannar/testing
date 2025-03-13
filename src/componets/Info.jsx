import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Info() {
  return (
    <div>
          <Container>
      <Row className='info' >
        <Col md={4}>
        <h6>TAREEN EDUCATION FOUNDATION (TEF)</h6>
        <h2>is a nonprofit</h2>
        <p>organisation with a mandate to improve quality of
             education in Pakistan; primarily operating in the rural 
             areas of Southern Punjab. Tareen Education Foundation (TEF) 
             is a nonprofit organization established under The Societies 
             Registration Act of 1860 with a mandate to improve quality
              of education in Pakistan.</p>
        </Col>

        <Col md={4}>
      
        <h2>OUR VISION</h2>
        <p>Our objective is to create centres of learning,
             which provide students an enabling environment
              to develop their faculties of critical analysis
               and independent thinking, to polish their communication
                and articulation skills, to increase their understanding
                 of social issues, and to make them active.</p>
        </Col>
      
        <Col md={4}>
      
      <h2>OUR MISSION</h2>
      <p>TEF is a non-profit organization with a mandate 
        to provide quality education, especially to the 
        marginalized communities, such as the rural poor and women.</p>
      </Col>

      </Row>
    </Container>

    </div>
  )
}
