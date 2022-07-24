import React from 'react'
import './Dog.css'


function Dog(props) {
    return (
        // En la img el src es la prop la cual será = al primer valor del Hook useState [x, setX] dentro de {} 
        <div className='img_container'>
            <img className='img' src={props.dogImage} alt="Dog"></img>
        </div>

    )
}

export default Dog