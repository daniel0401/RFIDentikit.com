import React from 'react';
import { Article } from '../../components';
import { news01, news02, news03, news04, news05 } from './imports'
import './news.css';

const News = () => {
  return (
    <div className='rfid__news section__padding'>
      <div className='rfid__news-heading'>
        <h1 className='gradient__text'>A lot is happening, read the latest news.</h1>
      </div>
      <div className='rfid__news-container'>
        <div className='rfid__news-container_groupA'>
          <Article imgUrl={news01} date='28th Feb 2020' title='SailGP Sydney' text='SailGP opened their inaugural event of the 2020 season in Sydney, Australia in February. RFIDentikit was in attendance providing the…'/>
          <Article imgUrl={news02} date='10th Feb 2020' title='ABN AMRO World Tennis Tournament' text='During February 2020, RFIDentikit had the pleasure of working with the team at the ABN AMRO world Tennis Tournament at…' />
          <Article imgUrl={news03} date='14th Oct 2019' title='European Open' text='In October 2019 we were privileged to work with the European Open in Antwerp, Belgium on their ATP 250 tennis…' />
          <Article imgUrl={news04} date='12th Oct 2018, 2019' title='EPCR' text='In 2018 RFIDentikit started working with the European Professional Club Rugby in providing them with AllowME to manage their accreditation…' />
          <Article imgUrl={news05} date='4th Nov 2019' title='MTV Worldstage Seville' text='Happening at the same time as the MTV EMA Awards, the MTV Worldstage 2019 event delivered an outstanding outdoor concert…' />
        </div>
      </div>
      <div className='rfid__news-button'>
        <button>Read All</button>
      </div>
    </div>
  )
}

export default News