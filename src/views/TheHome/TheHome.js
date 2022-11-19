import React from 'react'
import Hero from '../../components/Hero/Hero'
import Offer from '../../components/Offer/Offer'
import Carousel from '../../components/Carousel/Carousel'

import About from '../../components/About/About'
import Newsletter from '../../components/Newsletter/Newsletter'

const TheHome = () => {
	return (
		<>
			<Hero />
			<About />	
			<Offer />
			<Carousel />
			<Newsletter />
		</>
	)
}

export default TheHome
