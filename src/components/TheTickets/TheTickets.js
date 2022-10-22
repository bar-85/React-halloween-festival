import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import { Wrapper, LeftSide, RightSide } from '../ItemStyles/ItemStyles.styles'
import ButtonContactWhite from '../Buttons/ButtonContactWhite'

const TheTickets = () => {
	return (
		<div>
			<Wrapper>
				<LeftSide>
					<Header />
					Ticket
				</LeftSide>
				<RightSide>
					<ButtonContactWhite />
				</RightSide>
			</Wrapper>
			<section>
				<Footer />
			</section>
		</div>
	)
}

export default TheTickets
