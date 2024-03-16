import React, { useState } from 'react'
import QRCode from 'react-qr-code'

const QrCodeGen = () => {
    const [qrCode, setQrCode] = useState('');
    const [input, setInput] = useState();

    function generateQrCode(){
        setQrCode(input);
    }
    // console.log(qrCode);
  return (
    <div>
        <input onChange={(e)=>setInput(e.target.value)} name='qr-code' placeholder='Type a name...'/>
        <button disabled={input && input.length?false :true} onClick={generateQrCode}>Generate</button>

        <div>
            <QRCode
            id='qr-code-vale'
            value={qrCode}
            />
        </div>
    </div>
  )
}

export default QrCodeGen
