import React from 'react'
import Hero from '../../components/Hero/Hero'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import About from '../../components/About/About'
import Carousel from '../../components/Carousel/Carousel'

const TheHome = () => {
	return (
		<div>
			<section>
				<Header />
				<Hero />
			</section>
			<section>
				<About />
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
