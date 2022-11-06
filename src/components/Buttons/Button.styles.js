import styled from 'styled-components'

export const Button = styled.button`
	padding: 0.5rem;
	font-weight: bold;
	border: 2px solid transparent;
	transition: 300ms all;
	display: flex;
	align-items: center;
	justify-content: center;
	color: black;
	background-color: orange;
	width: 8rem;
	border-radius: 5px;

	:hover {
		cursor: pointer;
		background-color: rgb(254, 176, 31);
	}
`

export const ButtonContactWhiteStyled = styled(Button)`
	color: white;
	background-color: transparent;
	margin: 0 2rem 0 1rem;
	width: 8rem;
	border: 2px solid white;

	:hover {
		cursor: pointer;
		background-color: rgba(255, 255, 255, 0.103);
		color: orange;
	}

	@media screen and (max-width: 900px) {
		margin-bottom: 3rem;
		margin-left: 3rem;
	}
`

export const ButtonTicketsStyled = styled(Button)`
	transition: 300ms all;
	color: white;
	background-color: transparent;
	border: 2px solid orange;

	:hover {
		cursor: pointer;
		background-color: rgba(255, 166, 0, 0.193);
	}
`
