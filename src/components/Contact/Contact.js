import React, { useRef } from 'react'
import emailjs from '@emailjs/browser'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import { PageHeader, Signup, FormStyled } from './Contact.styles'
import Blur from '../Blur/Blur'
import spider from '../../assets/spider.png'
import { motion } from 'framer-motion'

const Contact = () => {
	const form = useRef()

	const submitHandler = e => {
		e.preventDefault()
		e.target.reset()
	}

	const sendEmail = e => {
		e.preventDefault()

		emailjs.sendForm('service_rk6lh6f', 'template_8w8gdsj', form.current, 'KFBtLQyWJQrdrvHfT').then(
			result => {
				console.log(result.text)
			},
			error => {
				console.log(error.text)
			}
		)
		e.target.reset()
	}

	return (
		<div>
			<Header />
			<PageHeader>
				<h2>Chcesz dowiedzieć się wiecej? </h2>
				<p>Skontaktuj się z nami a my odpowiemy na wszystkie pytania.</p>
				<motion.div animate={{ y: [80, 200, 80] }} transition={{ duration: 6, type: 'tween', repeat: Infinity }} className='spider-img'>
					<img src={spider} alt='pająk img' />
				</motion.div>
			</PageHeader>

			<FormStyled>
				<div>
					<Blur />
				</div>
				<form ref={form} onSubmit={sendEmail}>
					<h1>Formularz kontaktowy</h1>
					<div>
						<label>Imię</label>
						<input type='text' name='to_name' />
					</div>
					<div>
						<label>E-mail:</label>
						<input type='email' name='from_name' />
					</div>
					<div>
						<label>Wiadomość:</label>
						<textarea name='message'></textarea>
					</div>
					<div>
						<input className='btn' type='submit' value='Wyślij wiadomość' />
					</div>
				</form>
			</FormStyled>

			<Signup>
				<div>
					<h3>Newsletter</h3>
					<p>bąć na bieżąco z wydarzeniami festiwalowymi</p>
				</div>
				<form  onSubmit={submitHandler}>
					<input type='email' placeholder='Wpisz swój email' id='email'/>
					<button>Wyślij</button>
				</form>
			</Signup>
			<Footer />
		</div>
	)
}

export default Contact
