import Card from '../Card/Card'
import { motion } from 'framer-motion'
import ButtonContact from '../Buttons/ButtonContact'
import Blur from '../Blur/Blur'
import imgOne from '../../assets/1.jpg'
import imgTwo from '../../assets/2.jpg'
import imgThree from '../../assets/3.jpg'
import { AboutStyled, Awesome, Cards } from './About.styles'

const About = () => {
	const transition = {
		duration: 1,
		type: 'spring',
	}

	return (
		<div>
			<AboutStyled>
				<Awesome>
					<span>UPIORNE ZABAWY</span>
					<span>których nie zapomnisz!</span>
					<span>
						Przygotuj się na noc, pełną wrażeń!
						<br />
						Zarejestruj się na Halloween Festival 2023
					</span>
					<a href={'/'}>
						<ButtonContact />
					</a>
					<Blur />
				</Awesome>

				<Cards>
					<motion.div initial={{ left: '40rem' }} whileInView={{ left: '30rem' }} transition={transition}>
						<Card picture={imgOne} />
					</motion.div>

					<motion.div initial={{ left: '3rem', top: '12rem' }} whileInView={{ left: '8rem' }} transition={transition}>
						<Card picture={imgThree} />
					</motion.div>

					<motion.div initial={{ top: '19rem', left: '40rem' }} whileInView={{ left: '28rem' }} transition={transition}>
						<Card picture={imgTwo} color='rgba(252, 166, 31, 0.45)' />
					</motion.div>
				</Cards>
			</AboutStyled>
		</div>
	)
}

export default About
