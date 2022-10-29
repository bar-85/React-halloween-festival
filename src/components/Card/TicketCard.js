import React from 'react'
import { TicketCards, Card, Features } from './TicketCard.styles'
import { ticketsData } from '../../data/ticketsData'
import orangeImg from '../../assets/orange.png'
import ButtonContact from '../Buttons/ButtonContact'

const TicketCard = () => {
	return (
		<div>
			<TicketCards>
				{ticketsData.map((ticket, i) => (
					<Card key={i}>
						<span>{ticket.name}</span>
						<span>{ticket.price} zł</span>

						<Features>
							{ticket.features.map((feature, i) => (
								<div className='feature'>
                                    <img src={orangeImg} alt="" />
                                    <span key={i}>{feature}</span>
                                </div>
							))}
						</Features>
                        <div className='button'>
                            <ButtonContact className='btn'/>
                        </div>
                        
					</Card>
				))}
			</TicketCards>
		</div>
	)
}

export default TicketCard
