import React, { useState } from 'react'
import MenusList from './menus'
import {FaPlus, FaMinus} from 'react-icons/fa'

const MenusItem = ({ item }) => {
    const [displayChildren, setdisplayChildren] = useState({});

    function toggleChildren(getLabel){
        setdisplayChildren({
            ...displayChildren,
            [getLabel] : !displayChildren[getLabel]
        })
    }

    console.log(displayChildren);
    return (
        <div className='menu-item-container'>
            <li>
                <div style={{display: 'flex', gap: '20px'}}>
                    <p>{item.label}</p>
                    {item && item.children
                        ? <span onClick={()=>toggleChildren(item.label)}>{displayChildren[item.label]?<FaMinus/>:<FaPlus/>}</span>
                        : null}

                    
                </div>
                {item && item.children && item.children.length > 0 && displayChildren[item.label]
                    ? <MenusList list={item.children} />
                    : null}
            </li>
        </div>
    )
}

export default MenusItem
