import React, { useState } from 'react'
import './App.css';
import './Form.css';
import HeroSection from './HeroSection';
import ServiceSection from './ServiceSection';
import FooterSection from './FooterSection';
import CounterSection from './CounterSection';
import LeftContainerForm from './form/LeftContainerForm';
import RightImageForm from './form/RightImageForm';

function App() {

  let [formState, setFormState] = React.useState(0)


  return (
    <div className='App'>
      <HeroSection/>
      <ServiceSection/>
      {/* <FooterSection /> */}
      <div className='form'>
        <LeftContainerForm formPage={formState} setFormState={setFormState}/>
        <RightImageForm formPage={formState}/>
      </div>
      <CounterSection/>    
    
    </div>
  )
}

export default App;
