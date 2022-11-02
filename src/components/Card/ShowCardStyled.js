import React from 'react'
import ButtonContact from '../Buttons/ButtonContact'
import { Wrapper, CardStyled, ButtonStyled } from './ShowCardStyled.styles'
import { Link } from 'react-router-dom'

const ShowCardStyled = () => {
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
					<ButtonStyled>
						<Link to='../contact'>
							<ButtonContact />
						</Link>
					</ButtonStyled>
				</CardStyled>
			</Wrapper>
		</div>
	)
}

export default ShowCardStyled
