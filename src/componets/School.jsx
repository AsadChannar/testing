import React from 'react'
import Row from 'react-bootstrap/esm/Row'
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import img1 from '../images/faiz-ahmad-faiz-school.jpg'
import img2 from '../images/amina-girls-high-school.jpg'
import img3 from '../images/wahi-salamat-ray.jpg'
import img4 from '../images/tef-khanwah-ghalwan-school.jpg'
import img5 from '../images/lodhran-public-school-lodhran.jpg'
export default function School() {
  return (
    <>
   
    <div className='color'>
     <Container>
        <Row>
        <Col>
        <center>
          <br></br>
        <p>
        CENTERS OF EXCELLENCE
        </p>
        <h2>
        MODERN SCHOOLS
        </h2>
        </center>
        </Col>
     
       
    
      </Row>

      <Row className='info' >
        <Col md={4} className='coloum'>
        <img className='img-thumbnail' src={img1}/>
        <h5>FAIZ AHMAD FAIZ (FAF) HIGH SCHOOL</h5>
        <p>
        It was established in 2012 on an area of 23800 sft in 17 MPR, Lodhran.
        </p>
        </Col>
        <Col md={4} className='coloum'>
        <img src={img2} className='img-thumbnail'/>
        <h5>AMINA GIRLS HIGHER SECONDARY SCHOOL (AGHSS)</h5>
        <p>
        It was established in 2013 on an area of 44000 sft in 21 MPR, Lodhran.
        </p>
        </Col>
        <Col md={4} className='coloum'>
        <img src={img3} className='img-thumbnail'/>
        <h5>WAHI SALAMAT RAI SCHOOL (WSR)</h5>
        <p>
        It was established in 2014 on an area of 7500 sft in Wahi Salamar Rai, Lodhran.
        </p>
        </Col>
      
      </Row>
      <Row className='info'>
      <Col md={4} className='coloum'>
        <img src={img4} className='img-thumbnail'/>
        <h5>TEF KHANWAH GHALWAN SCHOOL (KGS)</h5>
        <p>
        It was established in 2018 on an area of 18000 sft in Khanwah Ghalwan, Lodhran.
        </p>
        </Col>
        <Col md={4} className='coloum'>
        <img src={img5} className='img-thumbnail'/>
        <h5>LODHRAN PUBLIC SCHOOL (LPS)</h5>
        <p>
        TEF has renovated in 2019-2020. It has revamped an area of 18000 sft in LPS.
        </p>
        </Col>
       

      </Row>

    </Container>
    </div>
    </>
  )
}
