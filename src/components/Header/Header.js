import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa'
import { Hamburger, Wrapper, Nav } from './Header.styles'
import LogoHeader from '../Logo/LogoHeader'
import SocialIcon from '../SocialIcon/SocialIcon'
import ButtonContactWhite from '../Buttons/ButtonContactWhite'



const Header = () => {
	const [click, setClick] = useState(false)
	const handleClick = () => setClick(!click)

	const closeMenu = () => setClick(false)

	return (
		<Wrapper>
			<LogoHeader />
			<Hamburger onClick={handleClick}>
				{click ? <FaTimes size={32} style={{ color: 'white' }} /> : <FaBars size={32} style={{ color: 'white' }} />}
			</Hamburger>
			<Nav className={click ? 'header-menu active' : 'header-menu'}>
				<Link to='/' onClick={closeMenu}>
					<li>Strona Główna</li>
				</Link>
				<Link to='/the-tickets' onClick={closeMenu}>
					<li>Bilety</li>
				</Link>
				<Link to='/quiz' onClick={closeMenu}>
					<li>Quiz</li>
				</Link>
				<SocialIcon />
				<Link to='/contact' >
					<ButtonContactWhite  className='btn-white' />	
				</Link>
			</Nav>	
		</Wrapper>
	)
}

export default Header
