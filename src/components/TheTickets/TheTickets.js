import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import TicketCard from '../Card/TicketCard'
import { TicketHeader } from './TheTickets.styles'

const TheTickets = () => {
	return (
		<div>
			<Header />
			<TicketHeader>
				<h1>
					<span>Zarezerwuj</span> online
				</h1>
				<TicketCard />
			</TicketHeader>
			<section>
				<Footer />
			</section>
		</div>
	)
}

export default TheTickets
