import React from 'react'
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import school  from '../images/schools.png'
import colleges  from '../images/colleges.png'
import employees from '../images/employees.png'
import students from '../images/students.png'
import CountUp from 'react-countup';

export default function infographs() {
  return (
    <div>
        <div className='parent_contenar'>
        <Container>
      <Row className='info' >
        <Col md={3} className='coloum'>
        <img src={school}/>
        <h2><CountUp end={120} duration={1}/></h2>
        <p>SCHOOLS</p>
        </Col>

        <Col md={3} className='coloum'>
        <img src={students}/>
        <h2><CountUp end={400} duration={1}/></h2>
        <p>STUDENTS</p>
        </Col>
      
        <Col md={3} className='coloum'>
        <img src={employees}/>
      <h2><CountUp end={239} duration={1}/></h2>
      <p>EMPLOYEES</p>
      </Col>

      <Col md={3} className='coloum'>
        <img src={colleges}/>
      <h2><CountUp end={11} duration={1}/></h2>
      <p>COLLEGES</p>
      </Col>

      </Row>
    </Container>
        </div>
    </div>
  )
}
