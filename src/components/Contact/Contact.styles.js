import styled from 'styled-components'

export const PageHeader = styled.div`
	position: relative;
	background-color: #d000ff75;
	box-shadow: 4px 16px 74px 15px #d000ff2a;
	height: 40vh;
	width: 100%;
	background-size: cover;
	background-position: top 25% right 0%;
	padding: 10px 80px;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: center;
	margin-top: 2rem;
	margin-bottom: 3rem;

	h2 {
		font-size: 2rem;
		color: white;
		margin-bottom: 1rem;
	}

	p {
		color: orange;
		font-size: 1.5rem;
	}

    .spider-image {
        position: absolute;
    }
`
export const Signup = styled.div`
	display: flex;
	justify-content: space-between;
	flex-wrap: wrap;
	align-items: center;
	margin: 7rem 0 4rem 5rem;

	h3 {
		color: white;
		font-size: 24px;
		font-weight: 600;
		margin-bottom: 1rem;
	}

	p {
		color: orange;
		font-size: 20px;
	}

	form {
		display: flex;
		width: 100%;

		input {
			height: 3rem;
			padding: 0 1.2rem;
			font-size: 16px;
			width: 40%;
			border: 1px solid transparent;
			border-radius: 10px;
			outline: none;
			border-radius: 5px;
			margin-top: 1rem;
			background-color: #ffffff;
		}

		button {
			width: 5rem;
			margin: 1rem 0 0 1rem;
			padding: 0.5rem;
			font-weight: bold;
			border: 4px solid transparent;
			transition: 300ms all;
			display: flex;
			align-items: center;
			justify-content: center;
			color: black;
			background-color: orange;

			:hover {
				cursor: pointer;
				background-color: rgb(255, 200, 99);
			}

			@media screen and (max-width: 320px) {
				font-size: 0.7rem;
			}
		}
	}
`

export const FormStyled = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	min-height: 100vh;

	div {
		right: 40%;
		top: 85%;
	}
`

export const Form = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	background-color: rgba(76, 19, 106, 0.675);
	width: 50%;
	height: min-content;
	min-height: 200px;
	height: 30rem;
	border-radius: 15px;
	padding: 0px;
	display: flex;
	box-shadow: 0px 19px 60px rgba(255, 136, 0, 0.26);
	justify-content: space-evenly;

	h1 {
		color: orange;
		font-size: 24px;
		font-weight: 600;
		margin-bottom: 1rem;
	}

	div {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	label {
		margin-bottom: 0.5rem;
		color: white;
	}

	input {
		font: inherit;
		padding: 0.5rem;
		border-radius: 6px;
		border: 2px solid orange;
		width: 20rem;
		max-width: 100%;
		background-color: #ffffffae;
	}

	textarea {
		font: inherit;
		padding: 0.5rem;
		border-radius: 6px;
		border: 1px solid orange;
		width: 20rem;
		max-width: 100%;
		background-color: #ffffffae;
	}

	@media screen and (max-width: 900px) {
		width: 360px;
		margin-top: -8rem;
		background-color: rgba(76, 19, 106, 0.925);
	}

	@media screen and (max-width: 320px) {
		width: 310px;
		margin-top: -5rem;
	}
`
