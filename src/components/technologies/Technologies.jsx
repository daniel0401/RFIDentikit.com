import React from 'react';
import './technologies.css';

const Technologies = ({title, text}) => {
  return (
    <div className='rfid__technologies-container__technology'>
      <div className='rfid__technologies-container__technology-title'>
        <div />
        <h1>{title}</h1>
      </div>
      <div className='rfid__technologies-container_technology-text'>
        <p>{text}</p>
      </div>
    </div>
  )
}

export default Technologies