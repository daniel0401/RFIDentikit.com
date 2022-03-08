import React from 'react';
import { Technologies } from '../../components'
import './function.css';

const Function = () => {
  return (
    <div className='rfid__function section__margin'>
        <div className='rfid__function-feature'>
          <Technologies title='Function' text='At the heart of the system is AllowMe and ScanMe, a custom suite of apps based on a robust industry standard database platform. This, combined with high frequency RFID chips, gives a reliable identification system that can be set up in moments, but operates, maintenance free, for days. With options to read chips at long range or on contact, discretion can be prioritised, allowing your guests and staff to enjoy your event without letting technology get in the way.' />
        </div>
        <div className='rfid__function-heading'>
          <h1 className='gradient__text'>How it works</h1>
          <a href="javascript:void()" class="rfid__function-heading_svg">
            <span>Learn More</span>
            <svg width="13px" height="10px" viewBox="0 0 13 10">
              <path d="M1,5 L11,5"></path>
              <polyline points="8 1 12 5 8 9"></polyline>
            </svg>
          </a>
          {/* <p>Read More</p> */}
        </div>
        <div className='rfid__function-container'>
          <Technologies title='1. Details Stored' text='Using our customizable registration app or linking to a clients existing system, delegates, guests, and contractors information is captured, along with a variety of associated data.' />
          <Technologies title='2. Assignment' text='Each person in the system has a unique RFID tag assigned to them. This will act as their personal ID throughout your event.' />
          <Technologies title='3. Rights' text='Each client or contractor is afforded unique status within your event, whether it’s access to a seminar, a meal, or interaction with a brand or event.' />
          <Technologies title='4. Deployment' text='Flexible equipment working with a variety of network connectivity, that can be ruggedised for the harshest of conditions or stylized for the slickest of events.' />
          <Technologies title='5. Triggered Events' text='Use the detection of a valid chip to trigger external events, register preference, or interact with social media.' />
        </div>
    </div>
  )
}

export default Function