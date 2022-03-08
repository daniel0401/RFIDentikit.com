import React from 'react';
import { motion } from 'framer-motion';
import allowMe from '../../assets/AllowME_ScanMe.png';
import './header.css';

const Header = () => {
  return (
    <div className='rfid__header' id='home'>
        <div className='rfid__header-content'>
          <h1 className='gradient__text'>Event Accreditation and Tracking Solutions</h1>
          <p>Any situation which has a gathering of known people in a temporary location can 
            benefit from the addition of a system from RFIDentikit. Sports, Music, Conferences and Parties. Our system is 
            completely configurable to put you back in control of your data, so you can manage your event with confidence and ease.
          </p>
        </div>

        <div className='rfid__header-image'>
          <img src={allowMe} alt='Allow Me' />
        </div>
    </div>
  )
}

export default Header