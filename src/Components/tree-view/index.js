import React from 'react'
import MenusList from './menus'
import './styles.css';

const TreeView = ({dtaLst = []}) => {
    console.log(dtaLst);
  return (
    <div className='main-container'>
      <MenusList list={dtaLst}/>
    </div>
  )
}

export default TreeView
