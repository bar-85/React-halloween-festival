import Card from '../Card/Card'
import { motion } from 'framer-motion'
import ButtonContact from '../Buttons/ButtonContact'
import Blur from '../Blur/Blur'
import imgOne from '../../assets/1.webp'
import imgTwo from '../../assets/2.webp'
import imgThree from '../../assets/3.webp'
import { AboutStyled, Awesome, Cards } from './Offer.styles'
import { Link } from 'react-router-dom'
import { Wrapper } from '../ItemStyles/ItemStyles.styles'

const Offer = () => {
	const transition = {
		duration: 1,
		type: 'spring',
	}

	return (
		<Wrapper>
			<AboutStyled>
				<Awesome>
					<span>UPIORNE ZABAWY</span>
					<span>Których nie zapomnisz!</span>
					<span>
						Przygotuj się na noc, pełną wrażeń!
						<br />
						Zarejestruj się na Halloween Festival 2023
					</span>
					<Link to='/contact'>
						<ButtonContact />
					</Link>
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
		</Wrapper>
	)
}

export default Offer
