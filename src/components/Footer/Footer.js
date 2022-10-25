import React from 'react'
import { Wrapper, Container, BottomText } from './Footer.styles'

const Footer = () => {
	return (
		<Wrapper>
			<Container>
				<ul>
					<li className='nav-item'>
						<a href='/'>Strona Główna</a>
					</li>
					<li className='nav-item'>
						<a href='/the-tickets'>Bilety</a>
					</li>
					<li className='nav-item'>
						<a href='/quiz'>Quiz</a>
					</li>
					<li className='nav-item'>
						<a href='/contact'>Kontakt</a>
					</li>
				</ul>
				<BottomText>
					<span className='line'></span>
					<p>© 2022 Halloween Festiwal | Wszelkie prawa zastrzeżone</p>
				</BottomText>
			</Container>
		</Wrapper>
	)
}

export default Footer
