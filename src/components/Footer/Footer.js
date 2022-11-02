import React from 'react'
import { Wrapper, Container, BottomText } from './Footer.styles'
import { Link } from 'react-router-dom'

const Footer = () => {
	return (
		<Wrapper>
			<Container>
				<ul>
					<Link to='/'>
						<li>Strona Główna</li>
					</Link>
					<Link to='/the-tickets'>
						<li>Bilety</li>
					</Link>
					<Link to='/quiz'>
						<li>Quiz</li>
					</Link>
					<Link to='/contact'>
						<li>Kontakt</li>
					</Link>
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
