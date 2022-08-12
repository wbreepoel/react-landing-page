const IMAGES = ["https://assets.codepen.io/6060109/form-stage-1.png",
                "https://assets.codepen.io/6060109/form-stage-2.png",
                "https://assets.codepen.io/6060109/form-stage-3.png",
                "https://assets.codepen.io/6060109/form-stage-4.png"]

function RightImageForm({formPage}) {
    return (
        <div className="right-image-form" 
        style={{backgroundImage: "url("+ IMAGES[formPage] +")"}}>
         
        </div>
    )
}

export default RightImageForm