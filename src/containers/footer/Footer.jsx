import React from 'react';
import RFIDLogo from '../../assets/RFID-logo.svg';
import RFIDLogoDark from '../../assets/RFID-Dark-logo.svg';
import './footer.css';

const Footer = () => {
  return (
    <div className='rfid__footer section__padding'>
      <div className='rfid__footer-heading'>
        <h1 className='gradient__text'>Contact us now and find out how RFIDENTIKIT can become an integral part of your next event...</h1>
      </div>

      <div className='rfid__footer-btn'>
        <p>Contact</p>
      </div>

      <div className='rfid__footer-links'>
        <div className='rfid__footer-links_logo'>
        <picture>
          <source media="(prefers-color-scheme: dark)" srcSet={RFIDLogoDark} />
          <img src={RFIDLogo} alt="RFID Logo" />
        </picture>
        </div>
        <div className='rfid__footer-links_div'>
          <h4>UK CONTACT DETAILS</h4>
          <p>RFIDentikit Ltd<br></br>3 Albert House<br></br>Knap Close<br></br>Letchworth<br></br>Herts SG6 1AQ<br></br>UK</p>
          <a href='mailto:uk@rfidentikit.com'>uk@rfidentikit.com</a>
          <p>RFIDentikit Ltd<br></br>5A Bear Lane<br></br>London SE1 0UH</p>
          <p>UK Registered Office</p>
        </div>
        <div className='rfid__footer-links_div'>
          <h4>US CONTACT DETAILS</h4>
          <p>RFIDentikit Ltd<br></br>700 S Flower Street #201<br></br>Burbank<br></br>CA 91502<br></br>USA</p>
          <a href='mailto:us@rfidentikit.com'>us@rfidentikit.com</a>
        </div>
        <div className='rfid__footer-links_div'>
          <h4>AU CONTACT DETAILS</h4>
          <p>RFIDentikit Australia Pty Ltd<br></br>40 Kent Road<br></br>Mascot<br></br>NSW 2020<br></br>Australia</p>
          <a href='mailto:au@rfidentikit.com'>au@rfidentikit.com</a>
          <p>AU Registered Address</p>
        </div>
      </div>

      <div className='rfid__footer-copyright'>
        <p>© RFIDentikit Limited 2022 - All Rights Reserved<br></br>Design by Daniel Lee</p>
      </div>
    </div>
  )
}

export default Footer