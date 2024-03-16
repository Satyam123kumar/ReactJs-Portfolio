import React, { useState } from 'react'
import data from './data'
import './style.css'

const Accordian = () => {
    const [statement, setStatment] = useState(null);

    const [enableMultiSelection, setEnableMultiSelection] = useState(false);
    const [multiple, setMultiple] = useState([]);

    function handleSingleSelection(getId) {
        console.log(getId);
        setStatment(getId === statement ? null : getId);
    }

    function handleMultiSelection(getId){
        let cpyMultiple = [...multiple];

        let findIndex = cpyMultiple.indexOf(getId);

        // console.log(findIndex);

        if (findIndex === -1){
            cpyMultiple.push(getId);
        }
        else{
            cpyMultiple.splice(findIndex, 1);
        }

        setMultiple(cpyMultiple);
    }

    console.log(statement, multiple);
    return (
        <div className='wrapper'>
            <button onClick={() => setEnableMultiSelection(!enableMultiSelection)}>Enable MultiSelection</button>
            <div className='accordian'>{
                data && data.length > 0 ?
                    data.map((dataItem) => (
                        <div className='item'>
                            <div onClick={enableMultiSelection
                                ? () => handleMultiSelection(dataItem.id)
                                : () => handleSingleSelection(dataItem.id)
                            }
                                className='title'>
                                <h3>{dataItem.question}</h3>
                                {/* {console.log(dataItem.question)} */}
                                <span>+</span>
                            </div>
                            {
                                enableMultiSelection ?
                                multiple.indexOf(dataItem.id) !==-1 && (
                                    <div className='content'>
                                    {dataItem.answer}
                                </div>
                                ) : statement === dataItem.id && (
                                    <div className='content'>
                                    {dataItem.answer}
                                </div>
                                )
                            }
                            {/* {statement === dataItem.id || multiple.indexOf(dataItem.id)!==-1 ? (
                                <div className='content'>
                                    {dataItem.answer}
                                </div>
                            ) : null} */}

                        </div>
                    )) :
                    <div>No data to show</div>
            }

            </div>
        </div>
    )
}

export default Accordian
