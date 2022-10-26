import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import witch from '../../assets/czarownica4.png'
import bat from '../../assets/bat2.png'
import house from '../../assets/house2.png'
import moon from '../../assets/moon.png'
import NumberCounter from 'number-counter'
import { motion } from 'framer-motion'
import { UpTitle, MediumTitle, FestivalDate, ImgRight, HeroButton } from './Hero.styles'
import { Wrapper, LeftSide, RightSide } from '../ItemStyles/ItemStyles.styles'
import Blur from '../Blur/Blur'
import ButtonContact from '../Buttons/ButtonContact'
import ButtonMore from '../Buttons/ButtonMore'
import About from '../About/About'


const Hero = () => {
	return (
		<div>
			<Header />
			<Wrapper>
				<Blur />
				<LeftSide>
					<UpTitle>
						<motion.div animate={{ x: [8, 238, 8] }} transition={{ duration: 8, type: 'tween', repeat: Infinity }}></motion.div>
						<span>najlepsza impreza w mieście!</span>
					</UpTitle>

					<MediumTitle>
						<div>
							<span className='stroke-text'>Halloween</span>
						</div>
						<div>
							<span>Festiwal</span>
						</div>
					</MediumTitle>

					<FestivalDate>
						<div>
							<span>
								<NumberCounter end={31} start={20} delay='1' />
							</span>
							<span>dzień</span>
						</div>
						<div>
							<span>
								<NumberCounter end={10} start={0} delay='1' />
							</span>
							<span>miesiąc</span>
						</div>
						<div>
							<span>
								<NumberCounter end={2023} start={2000} delay='50' />
							</span>
							<span>rok</span>
						</div>
					</FestivalDate>
					<HeroButton>
						<ButtonContact/>
						<ButtonMore />
					</HeroButton>
				</LeftSide>
				<RightSide>
					<ImgRight>
						<img src={moon} alt='księżyc img' className='moon-image' />
						<img src={house} alt='dom img' className='house-image' />
						<motion.div
							animate={{ y: [0, 10, 7, 15, 9, 12, 0] }}
							transition={{ duration: 5, type: 'tween', repeat: Infinity }}
							className='bat-image-motion'>
							<img src={bat} alt='nietoperz img' className='bat-image' />
						</motion.div>
						<motion.div animate={{ y: [0, 40, 0] }} transition={{ duration: 6, type: 'tween', repeat: Infinity }} className='back-image-motion'>
							<img src={witch} alt='czarownica na miotle img' className='witch-image' />
						</motion.div>
					</ImgRight>
				</RightSide>
			</Wrapper>
			<section>
				<Wrapper>
					<About />
				</Wrapper>
				<Wrapper>
					
				</Wrapper>
			</section>
			<section>
				<Footer />
			</section>
		</div>
	)
}

export default Hero
