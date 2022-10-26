import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import { PageHeader, Signup, FormStyled, Form } from './Contact.styles'
import Blur from '../Blur/Blur'
import spider from '../../assets/spider.png'
import { motion } from 'framer-motion'

const Contact = () => {
	const submitHandler = event => {
		event.preventDefault()
	}

	return (
		<div>
			<Header />
			<PageHeader>
				<h2>Chcesz dowiedzieć się wiecej? </h2>
				<p>Skontaktuj się z nami a my odpowiemy na wszystkie pytania.</p>
				<motion.div animate={{ y: [0, 70, 0] }} transition={{ duration: 6, type: 'tween', repeat: Infinity }} className='back-image-motion'>
					<img src={spider} alt='pająk img' className='spider-image' />
				</motion.div>
			</PageHeader>

			<FormStyled>
				<div>
					<Blur />
				</div>
				<Form onSubmit={submitHandler}>
					<h1>Formularz kontaktowy</h1>
					<div>
						<label>Imię</label>
						<input type='text' required="required" />
					</div>
					<div>
						<label>Nazwisko</label>
						<input type='text' required="required" />
					</div>
					<div>
						<label>Wpisz wiadomość:</label>
						<textarea ></textarea>
					</div>

					<div>
						<button type='submit'>Wyślij</button>
					</div>
				</Form>
			</FormStyled>

			<Signup>
				<div>
					<h3>Zapisz się do naszego Newslettera</h3>
					<p>Otrzymuj powiadomienia e-mail o naszych nowościach.</p>
				</div>
				<form>
					<input type='text' placeholder='Wpisz swój email' id='email' />
					<button>Wyślij</button>
				</form>
			</Signup>
			<Footer />
		</div>
	)
}

export default Contact
