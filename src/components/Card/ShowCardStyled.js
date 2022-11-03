import React from 'react'
import ButtonContact from '../Buttons/ButtonContact'
import ButtonTickets from '../Buttons/ButtonTickets'
import { Wrapper, CardStyled, ButtonStyled, ContactCard } from './ShowCardStyled.styles'
import { Link } from 'react-router-dom'

const ShowCardStyled = () => {

	const refreshPage = () =>  {
		window.location.reload(false);
	  }

	return (
		<ContactCard>
			<Wrapper>
				<CardStyled>
					<div>
						<div>
							W celu zarezerwowania biletów prosimy o kontakt z naszym biurem obsługi festiwalu
							<div></div>
						</div>
					</div>
					<ButtonStyled>
						<Link to='../contact'>
							<ButtonContact />
						</Link>
						<Link to='../the-tickets' onClick={refreshPage} >
							<ButtonTickets />
						</Link>
					</ButtonStyled>
				</CardStyled>
			</Wrapper>
		</ContactCard>
	)
}

export default ShowCardStyled
