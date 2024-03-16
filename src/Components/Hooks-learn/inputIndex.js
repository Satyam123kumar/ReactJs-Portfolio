import React, { useState } from 'react'

const InputIndex = () => {
    const [inputVar, setInputVar] = useState("Hello");

    function ChangeOnInput(e){
        let newVar = e.target.value;
        setInputVar(newVar);
    }
  return (
    <div>
      <input placeholder='Write Something...' onChange={()=>{ChangeOnInput()}}/>
      {inputVar}
    </div>
  )
}

export default InputIndex
