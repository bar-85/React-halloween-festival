import React, { useState } from 'react'
import { Link } from "react-router-dom";

import { FaBars, FaTimes } from 'react-icons/fa'
import './Header.css'

import navIcon1 from '../../assets/nav-icon1.svg'
import navIcon2 from '../../assets/nav-icon2.svg'
import navIcon3 from '../../assets/nav-icon3.svg'
import { SocialIcon, Hamburger } from './Header.styles';
import LogoHeader from '../Logo/LogoHeader'


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
				<SocialIcon>
					<a href='/'>
						<img src={navIcon1} alt='' />
					</a>
					<a href='/'>
						<img src={navIcon2} alt='' />
					</a>
					<a href='/'>
						<img src={navIcon3} alt='' />
					</a>
				</SocialIcon>
			</div>
		</div>
	)
}

export default Header
