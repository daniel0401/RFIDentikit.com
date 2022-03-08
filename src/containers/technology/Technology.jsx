import React from 'react';
import { Technologies } from '../../components'
import './technology.css';

const technologyData = [
  {
    title: 'ACTIVATION',
    text: 'The radio waves from the antenna activate the chip, which then transmits its data back to the antenna. This means that the chip can be passive (without a power supply) and virtually disposable.'
  },
  {
    title: 'RANGE',
    text: 'RFID devices will work within a few feet (up to 20 feet for high-frequency devices) of the scanner. For example, you could just put all of your groceries or purchases in a bag, and set the bag on the scanner. It would be able to query all of the RFID devices and total your purchase immediately.'
  },
  {
    title: 'TECHNOLOGY',
    text: 'RFID technology has been available for more than fifty years. It has only been recently that the ability to manufacture the RFID devices has fallen to the point where they can be used as a “throwaway” inventory or control device. It is now common place in large volume asset tracking.'
  }
]

const Technology = () => {
  return (
    <div className='rfid__technology section__padding'>
      <div className='rfid__technology-heading'>
        <h1 className='gradient__text'>Technology</h1>
        <p>RFID stands for Radio-Frequency IDentification. The acronym refers to small electronic devices that consist of a small chip and an antenna.</p>
      </div>
      <div className='rfid__technology-container'>
        {technologyData.map((item, index) => (
          <Technologies title={item.title} text={item.text} key={item.title + index} />
        ))}
      </div>
    </div>
  )
}

export default Technology