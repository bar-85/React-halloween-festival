import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import { Wrapper, LeftSide, RightSide} from '../ItemStyles/ItemStyles.styles'
import ButtonContactWhite from '../Buttons/ButtonContactWhite'

const Quiz = () => {
	return (
		<div>
			<Wrapper>
				<LeftSide>
					<Header />

          Quiz
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

export default Quiz
