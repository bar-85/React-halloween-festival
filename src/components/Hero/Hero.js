import React from 'react'
import witch from '../../assets/witchimg.webp'
import bat from '../../assets/bat2.webp'
import house from '../../assets/house2.webp'
import NumberCounter from 'number-counter'
import { motion } from 'framer-motion'
import { UpTitle, MediumTitle, FestivalDate, HeroButton, ImgStyled, LeftSide } from './Hero.styles'
import { Wrapper } from '../ItemStyles/ItemStyles.styles'
import Blur from '../Blur/Blur'
import ButtonContact from '../Buttons/ButtonContact'
import ButtonTickets from '../Buttons/ButtonTickets'
import { Link } from 'react-router-dom'


const Hero = () => {
	return (
		<div>
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
								<NumberCounter end={2025} start={2000} delay='50' />
							</span>
							<span>rok</span>
						</div>
					</FestivalDate>
					<HeroButton>
						<Link to='./contact'>
							<ButtonContact />
						</Link>
						<Link to='./the-tickets'>
							<ButtonTickets />
						</Link>
					</HeroButton>
				</LeftSide>
				<ImgStyled>
					<div className='house'>
						<img src={house} alt='dom img' />
					</div>
					<div className='bat'>
						<motion.div
							animate={{ y: [0, 10, 7, 15, 9, 12, 0] }}
							transition={{ duration: 5, type: 'tween', repeat: Infinity }}
							className='bat-image-motion'>
							<img src={bat} alt='nietoperz img' />
						</motion.div>
					</div>
					<div className='witch'>
						<motion.div animate={{ y: [0, 60, 0] }} transition={{ duration: 6, type: 'tween', repeat: Infinity }} className='back-image-motion'>
							<img src={witch} alt='czarownica na miotle img' className='witch-image' />
						</motion.div>
					</div>
				</ImgStyled>
			</Wrapper>
		</div>
	)
}

export default Hero
