import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import Slider1 from '../images/slider-image-1.jpg'
import Slider2 from '../images/slider-image-2.jpg'
import Slider3 from '../images/slider-image-3.jpg'
import Slider4 from '../images/slider-image-4.jpg'
import Slider5 from '../images/slider-image-5.jpg'
import Slider6 from '../images/slider-image-6.jpg'


export default function Slider() {
  return (
    <div>
         <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Slider1}
          alt="First slide"
        />
  
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Slider2}
          alt="Second slide"
        />


      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Slider3}
          alt="Third slide"
        />

    
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Slider4}
          alt="Third slide"
        />

      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Slider5}
          alt="Third slide"
        />

    
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Slider6}
          alt="Third slide"
        />

     
      </Carousel.Item>
    </Carousel>
    </div>
  )
}
