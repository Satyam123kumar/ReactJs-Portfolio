import React, { useState } from 'react';
import {FaStar} from 'react-icons/fa';
import './style.css';
const Rating = ({noOfStars = 5}) => {
    
    const [star, setStar] = useState(0);
    const [hover, setHover] = useState(0);
    
    function handleClick(getIndex){
        console.log("clicked", getIndex);
        setStar(getIndex);
    }

    function handleMouseMove(getIndex){
        setHover(getIndex);
        console.log("hover", getIndex);
    }

    function handleMouseLeave(){
        setHover(star);
    }

    // console.log("star", star);
    // console.log("hover", hover);
  return (
    <div className='starRating'>
        {
        [...Array(noOfStars)].map((_, index) => {
            index+=1;
            return (
            <>
            <FaStar className={index <= (star || hover)? "active": "inactive"}
                key={index}
                onClick={()=>handleClick(index)}
                onMouseMove={()=>handleMouseMove(index)}
                onMouseLeave={()=>handleMouseLeave()}
                size={40}
            />
            </>
            )
        })}
    </div>
  )
}

export default Rating
