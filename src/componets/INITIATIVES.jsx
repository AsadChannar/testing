import React from 'react'
import Row from 'react-bootstrap/esm/Row'
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import img1 from '../images/promoting-information-technology-education.jpg'
import img2 from '../images/promoting-science-education.jpg'
import img3 from '../images/promoting-creativity-through-art.jpg'
import img4 from '../images/reviving-libraries-in-schools.jpg'
import img5 from '../images/school-health-programme.jpg'
import img6 from '../images/promoting-organized-sports-in-schools.jpg'
import img7 from '../images/english-language-programme.jpg'
import img8 from '../images/providing-missing-facilities.jpg'
import img9 from '../images/professional-development-workshops.jpg'
import img10 from '../images/deployment-of-teachers-in-schools.jpg'
import img11 from '../images/communication-and-outreach.jpg'
import img12 from '../images/horticulture-and-plantation.jpg'
import img13 from '../images/career-counseling-programme.jpg'


export default function INITIATIVES() {
  return (
    <>
    <div className='coloor'>
      <Container>
        <Row>
       

        <Col>
        <center>
          <br />
        <p>
        TEF INITIATIVES
        </p>
        <h2>
        OUR PROGRAMMES
        </h2>
        </center>
      
        </Col>

       

      </Row>

      <Row  >
        <Col md={3} className='coloum'>
        <img src={img1} className='img-thumbnail'/>
        <figcaption>promoting-information-technology-education</figcaption>
        </Col>
        <Col md={3} className='coloum'>
        <img src={img2}  className='img-thumbnail'/>
        <p>promoting-science-education</p>
        </Col>
        <Col md={3} className='coloum'>
        <img src={img3} className='img-thumbnail'/>
        <p>promoting-creativity-through-art</p>
        </Col>
        <Col md={3} className='coloum'>
        <img src={img4} className='img-thumbnail'/>
        <p>reviving-libraries-in-schools</p>
        </Col>
      </Row>
      <Row >
        <Col md={3} className='coloum'>
        <img src={img5} className='img-thumbnail'/>
        <p>school-health-programme</p>
        </Col>
        <Col md={3} className='coloum'>
        <img src={img6} className='img-thumbnail'/>
        <p>promoting-organized-sports-in-schools</p>
        </Col>
        <Col md={3} className='coloum'>
        <img src={img7} className='img-thumbnail'/>
        <p>english-language-programme</p>
        </Col>
        <Col md={3} className='coloum'>
        <img src={img8} className='img-thumbnail'/>
        <p>providing-missing-facilities</p>
        </Col>
      </Row>
      <Row  >
        <Col md={3} className='coloum'>
        <img src={img9} className='img-thumbnail'/>
        <p>professional-development-workshops</p>
        </Col>
        <Col md={3} className='coloum'>
        <img src={img10} className='img-thumbnail'/>
        <p>deployment-of-teachers-in-schools</p>
        </Col>
        <Col md={3} className='coloum'>
        <img src={img11} className='img-thumbnail'/>
        <p>communication-and-outreach</p>
        </Col>
        <Col md={3} className='coloum'>
        <img src={img12} className='img-thumbnail'/>
        <p>horticulture-and-plantation</p>
        </Col>
      </Row>
      <Row  >
        <Col md={3} className='coloum'>
        <img src={img13} className='img-thumbnail'/>
        <p>career-counseling-programme</p>
        </Col>
      </Row>
    </Container>
    </div>
    </>
  )
}
