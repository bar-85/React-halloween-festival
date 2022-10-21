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
						<a href='#about'>Bilety</a>
					</li>
					<li className='nav-item'>
						<a href='#testimonials'>Quiz</a>
					</li>
					<li className='nav-item'>
						<a href='#demo'>Kontakt</a>
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
