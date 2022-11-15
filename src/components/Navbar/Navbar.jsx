import './Navbar.css'
import Logo from '../Logo/Logo'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = ()=>{
  const [menu, setMenu]= useState(false)
  const [classSpan, setClassSpan] = useState(false)
  const openMenu = ()=>{
    setMenu(!menu)
    setClassSpan(!classSpan)
  }
  
  return(
    <header className="header">      
        <Logo />
        <button className='header-button' onClick={openMenu}>
          <span className={`top-line-${classSpan ? "clicked": "unclicked"}`}></span>
          <span className={`middle-line-${classSpan ? "clicked": "unclicked"}`}></span>
          <span className={`bottom-line-${classSpan ? "clicked": "unclicked"}`}></span>
        </button>
        <nav className={`header-nav ${menu ? "active": ""}`}>
          <ul className="header-ul">
            <li className="header-li" onClick={openMenu}><Link to='/pendulo-hebreo' className='header-a'>Pendulo hebreo</Link></li>
            <li className="header-li" onClick={openMenu}><Link to='/registros-akashicos' className='header-a'>Registros akashicos</Link></li>
            <li className="header-li" onClick={openMenu}><Link to='/contacto' className='header-a'>Contacto</Link></li>
          </ul>
        </nav>
    </header>
  )
}

export default Navbar