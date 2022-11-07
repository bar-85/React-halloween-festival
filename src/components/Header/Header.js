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
				<Link to='/' className="link" onClick={closeMenu}>
					Strona Główna
				</Link>
				<Link to='/the-tickets' className="link" onClick={closeMenu}>
					Bilety
				</Link>
				<Link to='/quiz' className="link" onClick={closeMenu}>
					Quiz
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
