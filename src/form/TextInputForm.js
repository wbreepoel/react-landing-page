function TextInputForm (props) {
    const placeholder = "What's your email?"
    return(
        <div className='text-input-form'>
                <form>
                    <input onChange={(e) => props.setEmailData(e.target.value)} type='text' placeholder={props.formPage == 0 ? placeholder : ''}/>
                </form>
        </div>
    )
}

export default TextInputForm