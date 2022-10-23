import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import { Wrapper, LeftSide, RightSide } from '../ItemStyles/ItemStyles.styles'


const Quiz = () => {
	return (
		<div>
			<Header />
			<Wrapper>
				<LeftSide>Quiz</LeftSide>
				<RightSide>
					
				</RightSide>
			</Wrapper>
			<section>
				<Footer />
			</section>
		</div>
	)
}

export default Quiz
