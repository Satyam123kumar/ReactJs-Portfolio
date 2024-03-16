import React, { useEffect, useState } from 'react'

const RandomColor = () => {

    const [typeOfColor, setTypeOfColor] = useState('hex');
    const [color, setColor] = useState('#000000');

    function generateRandom(length){
        return Math.floor(Math.random()*length);
    }

    function handleHexRandomColor(){
        const hex = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
        let hexColor = "#";

        for(let i=0; i<6; i++){
            hexColor += hex[generateRandom(hex.length)];
        }
        console.log(hexColor);
        setColor(hexColor);
    }
    function handleRgbRandomColor(){
        let r = generateRandom(256);
        let g = generateRandom(256);
        let b = generateRandom(256);

        console.log(`rgb(${r},${g},${b})`);
        setColor(`rgb(${r},${g},${b})`);
    }

    useEffect(()=>{
        if (typeOfColor === 'rgb') handleRgbRandomColor();
        else handleHexRandomColor();
    }, [typeOfColor]);

    return (
        <div style={{
            // display: 'flex',
            width: '100vw',
            height: '100vh',
            background: color
        }}>

            <button onClick={()=>setTypeOfColor('hex')}>HEX Color</button>
            <button onClick={()=>setTypeOfColor('rgb')}>RGB Color</button>
            <button onClick={typeOfColor === 'hex'? handleHexRandomColor : handleRgbRandomColor}>
                Generate Random Color
                </button>
                <div style={{
                    display: 'flex',
                    alignContent: 'center',
                    justifyContent: 'center',
                    marginTop: '1em',
                    fontSize: '3em',
                    color: 'white',
                    flexDirection: 'column',
                    gap: '5px'
                    
                }}>
                    <h3>{typeOfColor === 'rgb'? "RGB Color" : "HEX Color"}</h3>
                    <h3>{color}</h3>
                </div>
        </div>
    )
}

export default RandomColor
