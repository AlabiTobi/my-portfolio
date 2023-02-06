import React, { useState} from 'react'
import {FaReact, FaBars} from 'react-icons/fa'
import { HiX } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import './Navbar.scss';

const data = [
{
  label: 'HOME',
  to : '/'
},
{
  label: 'ABOUT ME',
  to : '/about'
},
{
  label: 'SKILLS',
  to : '/skills'
},
{
  label: 'RESUME',
  to : '/resume'
},
// {
//   label: 'PORTFOLIO',
//   to : '/portfolio'
// },
{
  label: 'CONTACT',
  to : '/contact'
}
]

const Navbar = () => {
  const [toggleIcon, setToggleIcon] = useState(false)

  const handleToggleIcon = ()=> {
    setToggleIcon(!toggleIcon);
  };

  return (
    <>
    
    <ul className={`navbar_container_menu ${toggleIcon && 'toggle'}`}>
            {
              data.map((item, key)=>(  
                <li key={key} className='navbar_container_menu_item'>
                    <Link className='navbar_container_menu_item_links' to={item.to}>
                      {item.label}
                    </Link>
                </li>

              ))
            }
          </ul>
    <div className='navdiv'>
        <nav className='navbar'>
          <div className='navbar_container'>
              <Link to='/' className='navbar_container_logo'>
                <FaReact size={30} />
              </Link>
          </div>
          

          <div className='nav_icon' onClick={handleToggleIcon}>
            {
              toggleIcon ? <HiX size ={30}/> : <FaBars size={30} />
            }
          </div>
        </nav>

    </div>
    </>
  )
}

export default Navbar