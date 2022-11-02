import React from 'react'
import { Wrapper, CardStyled } from './InfoCard.styles'
import ButtonContact from '../Buttons/ButtonContact'
import { Link } from 'react-router-dom'

function InfoCard() {
	return (
		<div>
			<Wrapper>
				<CardStyled>
					<div>
						<div>
							W celu zarezerwowania biletów zapraszamy do kontaktu
							<div></div>
						</div>
					</div>
					<Link to='../contact'>
						<ButtonContact />
					</Link>
				</CardStyled>
			</Wrapper>
		</div>
	)
}

export default InfoCard
