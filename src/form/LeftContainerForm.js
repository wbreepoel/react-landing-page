import React from 'react'

import TextInputForm from './TextInputForm';
import ButtonGroupForm from './ButtonGroupForm';

const FORM_TEXT = ["Apply to work with our agency",
                   "What's your budget?",
                   "What is your target audience?",
                   "Thank you!"]

function LeftContainerForm(props) {

    let [emailData, setEmailData] = React.useState('')
    let [buttonData, setButtonData] = React.useState('')
    let [extraDetails, setExtraDetails] = React.useState('')

    return (
        <div className='left-container-form'>
            <div className='left-inner-form-container'>
                <h1>{FORM_TEXT[props.formPage]}</h1>
                {

                    (props.formPage == 0 || props.formPage == 2) && 
                    <TextInputForm emailData={emailData} setEmailData={setEmailData} 
                    extraDetails={extraDetails} setExtraDetails={setExtraDetails} formPage={props.formPage}/>
                }
                {
                    props.formPage == 1 && <ButtonGroupForm buttonData={buttonData} setButtonData={setButtonData}/>  
                }
                {           
                    props.formPage !== 3 && (
                    <button onClick={() => props.setFormState(props.formPage+1)}>Next</button>
                )}
                {
                    props.formPage === 3 ? emailData + buttonData : ''
                }

            </div>
        </div>
    )
}

export default LeftContainerForm