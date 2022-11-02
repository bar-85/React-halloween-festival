import React, { useState } from 'react'
import { TicketCards, Card, Features } from './TicketCard.styles'
import { ticketsData } from '../../data/ticketsData'
import orangeImg from '../../assets/orange.png'
import { Button } from '../Buttons/Button.styles'
import InfoCard from './InfoCard'

const TicketCard = () => {
	const [showCard, setShowCard] = useState(true)

	const toogleCardHandler = () => {
		setShowCard(!showCard)
	}

	return (
		<div>
			{showCard && <InfoCard />}

			<TicketCards>
				{ticketsData.map((ticket, i) => (
					<Card key={i}>
						<span>{ticket.name}</span>
						<span>{ticket.price} zł</span>

						<Features>
							{ticket.features.map((feature, i) => (
								<div className='feature'>
									<img src={orangeImg} alt='' />
									<span key={i}>{feature}</span>
								</div>
							))}
						</Features>
						<div className='button'>
							<Button onClick={toogleCardHandler} className='btn'>
								Czytaj więcej
							</Button>
						</div>
					</Card>
				))}
			</TicketCards>
		</div>
	)
}

export default TicketCard
