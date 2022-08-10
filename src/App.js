import React, { useState } from 'react'
import './App.css';
import HeroSection from './HeroSection';
import ServiceSection from './ServiceSection';
import FooterSection from './FooterSection';
import CounterSection from './CounterSection';

function App() {

  

  return (
    <div className='App'>
      <HeroSection/>
      <ServiceSection/>
      <FooterSection />
      <CounterSection/>    
    
    </div>
  )
}

export default App;
