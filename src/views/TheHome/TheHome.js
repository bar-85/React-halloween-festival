import React from 'react'
import Hero from '../../components/Hero/Hero'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import About from '../../components/About/About'
import Carousel from '../../components/Carousel/Carousel'
import { Wrapper } from '../../components/ItemStyles/ItemStyles.styles'

const TheHome = () => {
	return (
		<div>
			<Header />
			<Hero />
			<section>
				<Wrapper>
					<About />
				</Wrapper>
			</section>
			<section>
				<Carousel />
			</section>
			<section>
				<Footer />
			</section>
		</div>
	)
}

export default TheHome
