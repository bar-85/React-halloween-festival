import React from 'react'
import { Signup } from './Newsletter.styles'

const Newsletter = () => {
	const submitHandler = e => {
		e.preventDefault()
		e.target.reset()
	}

	return (
		<Signup>
			<div>
				<h3>Newsletter</h3>
				<p>bąć na bieżąco z wydarzeniami festiwalowymi</p>
			</div>
			<form onSubmit={submitHandler}>
				<input type='email' placeholder='Wpisz swój email' id='email' required />
				<button>Wyślij</button>
			</form>
		</Signup>
	)
}

export default Newsletter
