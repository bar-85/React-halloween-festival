import React from 'react'
import TicketCard from '../../components/Card/TicketCard'
import { TicketHeader } from './TheTickets.styles'

const TheTickets = () => {
	return (
		<div>
			<TicketHeader>
				<h1>
					<span>Zarezerwuj</span> online
				</h1>
				<TicketCard />
			</TicketHeader>
		</div>
	)
}

export default TheTickets
