import React, { useState } from 'react'

const CounterText = () => {
    const [counter, setCounter] = useState(0);
    const [text, setText] = useState(true);

    function IncreaseCounter(count){
        count++;
        setCounter(count);
    }
    
  return (
    <div>
        <div>{counter}</div>
      <button onClick={()=>{
        IncreaseCounter(counter);
        setText(!text);
      }}>Click Here</button>

      <div>{text===true?"Hey There! I love you":null}</div>
    </div>
  )
}

export default CounterText
