import React from 'react';
import Slider from "react-slick";
import { wta, ufc, mtv, tenniscanada, etour, globalcitizen } from './imports';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './clients.css';

const Clients = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    swipeToSlide: false,
    responsive: [
      {
        breakpoint: 1414,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        }
      },
      {
        breakpoint: 870,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div className='rfid__clients-container'>
      <h2 className='rfid__clients-header gradient__text'>Our Clients</h2>
      <div className='rfid__clients'>
      <Slider {...settings} className='slider'>
        <div className='slider-card'>
          <div className="slider-img">
            <img src={wta} alt='WTA' />
          </div>
        </div>
        <div className='slider-card'>
          <div className="slider-img">
            <img src={ufc} alt='UFC' />
          </div>
        </div>
        <div className='slider-card'>
          <div className="slider-img">
            <img src={mtv} alt='MTV' />
          </div>
        </div>
        <div className='slider-card'>
          <div className="slider-img">
            <img src={tenniscanada} alt='Tennis Canada' />
          </div>
        </div>
        <div className='slider-card'>
          <div className="slider-img">
            <img src={etour} alt='European Tour' style={{filter: 'invert()'}} />
          </div>
        </div>
        <div className='slider-card'>
          <div className="slider-img">
            <img src={globalcitizen} alt='Global Citizen' />
          </div>
        </div>
      </Slider>
      </div>
      <div className='rfid__clients-button'>
        <button>View All</button>
      </div>
    </div>
  )
}

export default Clients