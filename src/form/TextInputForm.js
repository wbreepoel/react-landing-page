function TextInputForm (props) {
    return(
        <div className='text-input-form'>
                <form>
                    <input onChange={(e) => props.setData(e.target.value)} type='text' 
                    placeholder={props.formPage === 0 ? props.placeholder : ''}/>
                </form>
        </div>
    )
}

export default TextInputForm