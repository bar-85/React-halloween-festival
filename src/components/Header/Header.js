import React, { useState } from 'react'
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from 'react-icons/fa'
import './Header.css'
import Logo from '../../assets/logo.png'
import navIcon1 from '../../assets/nav-icon1.svg'
import navIcon2 from '../../assets/nav-icon2.svg'
import navIcon3 from '../../assets/nav-icon3.svg'

const Header = () => {
	const [click, setClick] = useState(false)
	const handleClick = () => setClick(!click)

	const closeMenu = () => setClick(false)

	return (
		<div className='header'>
			<img src={Logo} alt='logo halloween' className='logo' />
			<div className='hamburger' onClick={handleClick}>
				{click ? <FaTimes size={32} style={{ color: 'white' }} /> : <FaBars size={32} style={{ color: 'white' }} />}
			</div>
			<div className={click ? 'header-menu active' : 'header-menu'}>
				<Link to='/' className='header-link' onClick={closeMenu}>Strona Główna</Link>
				<Link to='/the-tickets' className='header-link' onClick={closeMenu}>Bilety</Link>
				<Link className='header-link' onClick={closeMenu}>Quiz</Link>
				<div className='social-icon'>
					<a href='/'>
						<img src={navIcon1} alt='' />
					</a>
					<a href='/'>
						<img src={navIcon2} alt='' />
					</a>
					<a href='/'>
						<img src={navIcon3} alt='' />
					</a>
				</div>
			</div>
		</div>
	)
}

export default Header
