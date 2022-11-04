import styled from 'styled-components'

export const Signup = styled.div`
	display: flex;
	justify-content: space-between;
	flex-wrap: wrap;
	align-items: center;
	margin: 4rem 0 1rem 5rem;

	h3 {
		color: orange;
		font-size: 24px;
		font-weight: 600;
		margin-bottom: 1rem;
	}

	p {
		color: white;
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
			border-radius: 6px;
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
		}
	}

	@media screen and (max-width: 900px) {
		margin: 0rem 0 3rem 2rem;

		form {
			display: flex;
			flex-direction: column;

			input {
				width: 90%;
				font-size: 0.8rem;
			}

			button {
			font-size: 0.9rem;
			}
		}

		h3 {
			font-size: 1.3rem;
		}

		p {
			font-size: 1rem;
		}

	@media screen and (max-width: 320px) {
		margin: 3rem 0 3rem 2rem;

		form {
			display: flex;
			flex-direction: column;

			input {
				width: 90%;
				font-size: 0.8rem;
			}

			button {
			font-size: 0.9rem;
			}
		}

		h3 {
			margin-top: 4rem;
			font-size: 1.3rem;
		}

		p {
			font-size: 1rem;
		}
`