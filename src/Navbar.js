import React from 'react'
import logo from './images/logo.svg'
import { FaBars } from 'react-icons/fa'
import { useGlobalContext } from './context'

const Navbar = () => {

  const {openSidebar, openSubmenu, closeSubmenu} = useGlobalContext();

  let displayMenu = (e) => {
    let page = e.target.textContent;
    let details = e.target.getBoundingClientRect();
    let center = (details.left + details.right)/2
    let bottom = details.bottom - 3
    openSubmenu(page, {center, bottom});
  }

  let handleSubmenu = (e) => {
    if(!e.target.classList.contains('link-btn')){
      closeSubmenu();
    }
  }

  return (
    <nav className='nav' onMouseOver={handleSubmenu}>
      <div className='nav-center'>
        <div className='nav-header'>
          <img src={logo} className='nav-logo' alt='logo' />
          <button className='btn toggle-btn' onClick={openSidebar}>
            <FaBars />
          </button>
        </div>
        <ul className='nav-links'>
          <li>
            <button className='link-btn' onMouseOver={displayMenu}>products</button>
          </li>
          <li>
            <button className='link-btn' onMouseOver={displayMenu}>developers</button>
          </li>
          <li>
            <button className='link-btn' onMouseOver={displayMenu}>company</button>
          </li>
        </ul>
        <button className='btn signin-btn'>sign in</button>
      </div>
    </nav>
  )
}

export default Navbar
