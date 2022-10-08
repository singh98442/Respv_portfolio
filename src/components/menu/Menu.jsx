import React from 'react'
import './Menu.scss'

const Menu = ({menu, setmenu}) => {
  const menuHandle = () =>{
    setmenu(!menu)
  }
  return (
    <div className={'menu ' + (menu && "active")}>
      <ul>
        <li onClick={menuHandle}><a href="#intro">Home</a></li>
        <li onClick={menuHandle}><a href="#portfolio">Portfolio</a></li>
        <li onClick={menuHandle}><a href="#work">Work</a></li>
        <li onClick={menuHandle}><a href="#testimonial">Testimonial</a></li>
        <li onClick={menuHandle}><a href="#contact">Contact</a></li>
      </ul>
    </div>
  )
}

export default Menu
