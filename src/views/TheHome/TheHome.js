import React from 'react'
import Hero from '../../components/Hero/Hero'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import Offer from '../../components/Offer/Offer'
import Carousel from '../../components/Carousel/Carousel'

import About from '../../components/About/About'
import Newsletter from '../../components/Newsletter/Newsletter'

const TheHome = () => {
	return (
		<>
			<Header />
			<Hero />
			<About />
			<Carousel />
			<Offer />
			<Newsletter />
			<Footer />
		</>
	)
}

export default TheHome
