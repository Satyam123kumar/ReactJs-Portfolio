import React from 'react'
import MenusItem from './menu-item'

const MenusList = ({list}) => {
  return (
    <ul>
      {list && list.length
      ? list.map((listItem)=><MenusItem item={listItem}/>)
      :null}
    </ul>
  )
}

export default MenusList
