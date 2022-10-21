import React, { useState } from 'react'
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from 'react-icons/fa'
import './Header.css'
import { Hamburger } from './Header.styles';
import LogoHeader from '../Logo/LogoHeader'
import SocialIcon from '../SocialIcon/SocialIcon'


const Header = () => {
	const [click, setClick] = useState(false)
	const handleClick = () => setClick(!click)

	const closeMenu = () => setClick(false)
	
	return (
		<div className='header'>
			<LogoHeader></LogoHeader>
			<Hamburger onClick={handleClick}>
				{click ? <FaTimes size={32} style={{ color: 'white' }} /> : <FaBars size={32} style={{ color: 'white' }} />}
			</Hamburger>
			<div className={click ? 'header-menu active' : 'header-menu'}>
				<Link to='/' className='header-link' onClick={closeMenu}>Strona Główna</Link>
				<Link to='/the-tickets' className='header-link' onClick={closeMenu}>Bilety</Link>
				<Link className='header-link' onClick={closeMenu}>Quiz</Link>
				<SocialIcon></SocialIcon>
			</div>
		</div>
	)
}

export default Header
