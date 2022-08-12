import React from 'react'

const BUTTON_STYLE = {
        backgroundColor: 'white',
        color: '#806c6c',
      }

const BUTTON_TEXT = ['$2K','$5K','+$10K']


function ButtonGroupForm({setButtonData}) {
    let [clickedButton, setClickedButton] = React.useState(3)

    return (
        <div className='button-group'>

            {
                BUTTON_TEXT.map((text,index) => {
                    return (
                    <button onClick={()=> {
                        setClickedButton(index);
                        setButtonData(text)}} style={clickedButton === index? BUTTON_STYLE : {}}>{text}</button>
                    )
                } )
            }
        </div>
    )
}

export default ButtonGroupForm