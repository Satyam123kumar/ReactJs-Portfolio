import React, { useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0);

    function IncreaseCounter(counter){
        counter++;
        setCount(counter);
    }

  return (
    <div>
        {count}<button onClick={()=>{
            IncreaseCounter(count)
        }}>Increase Count</button>
    </div>
  )
}

export default Counter
