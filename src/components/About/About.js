import React from 'react'
import cat from '../../assets/cat1.png'
import pumpkin from '../../assets/pumpkin1.png'
import { Reasons, LeftSide, RightSide, Details } from './About.styles'

const About = () => {
	return (
		<>
			<Reasons>
				<LeftSide>
					<img src={cat} alt='halloween zdjęcie' className='img' />
				</LeftSide>
				<RightSide>
					<div className='title'>
						<span>Dlaczego</span>
						<span> nie może Cię zabraknąć?</span>
						<span></span>
					</div>
					<Details>
						<div>
							<img src={pumpkin} alt='zdjęcie dyni' />
							<span>Wspaniała zabawa dla całej rodziny</span>
						</div>
						<div>
							<img src={pumpkin} alt='zdjęcie dyni' />
							<span>Imprezy towarzyszące (konkursy, wystawy, kino i wiele innych...)</span>
						</div>
						<div>
							<img src={pumpkin} alt='zdjęcie dyni' />
							<span>Bajkowe, dopracowane w najmniejszych detalach dekoracje Halloween</span>
						</div>
						<div>
							<img src={pumpkin} alt='zdjęcie dyni' />
							<span>Prawdziwe święto dla miłośników mocnych wrażeń!</span>
						</div>
					</Details>
				</RightSide>
			</Reasons>
		</>
	)
}

export default About
