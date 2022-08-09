function ServiceBlocks(props) {
    return(
        <div className='service-item'>
            <img src={props.data.url}/>
            <p>{props.data.text}</p>
        </div>
    )
}

export default ServiceBlocks