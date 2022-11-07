import React from 'react'
import { Wrapper, BottomText, Nav } from './Footer.styles'
import { Link } from 'react-router-dom'

const Footer = () => {
	return (
		<Wrapper>
			<Nav>
				<Link to='/' className='link'>
					Strona Główna
				</Link>
				<Link to='/the-tickets' className='link'>
					Bilety
				</Link>
				<Link to='/quiz' className='link'>
					Quiz
				</Link>
				<Link to='/contact' className='link'>
					Kontakt
				</Link>
			</Nav>
			<BottomText>
				<span className='line'></span>
				<p>© 2022 Halloween Festiwal | Wszelkie prawa zastrzeżone</p>
			</BottomText>
		</Wrapper>
	)
}

export default Footer
