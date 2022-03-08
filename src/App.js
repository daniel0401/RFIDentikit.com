import React from 'react';

import { Footer, News, Technology, Function, Header } from './containers';
import { Clients, Navbar } from './components';
import './app.css';

const App = () => {
  return (
    <div className='rfid__content-container'>
      <div className='gradient__bg'>
        <Navbar />
        <Header />
      </div>
      <Technology />
      <Function />
      <Clients />
      <News />
      <Footer />
    </div>
  )
}

export default App