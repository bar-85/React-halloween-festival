import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import { Wrapper } from '../ItemStyles/ItemStyles.styles'
import { LeftSideTickets, RightSideTickets } from '../TheTickets/TheTickets.styles'


const TheTickets = () => {
	return (
		<div>
			<Wrapper>
					<LeftSideTickets>
						<Header />
					</LeftSideTickets>
					<RightSideTickets>

					</RightSideTickets>
			</Wrapper>
			<section>
				<Footer />
			</section>
			
		</div>
	)
}

export default TheTickets
