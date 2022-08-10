import React, { useState } from 'react'
import './App.css';
import HeroSection from './HeroSection';
import ServiceSection from './ServiceSection';
import FooterSection from './FooterSection';
import CounterSection from './CounterSection';

function App() {

  const [count, setCounter] = React.useState(0)
  

  return (
    <div className='App'>
      <HeroSection/>
      <ServiceSection/>
      <FooterSection />
      <CounterSection onClickPlus={()=> setCounter(count+1)} 
        onClickMin={()=> setCounter(count-1)} count={count} />    
    
    </div>
  )
}

export default App;
