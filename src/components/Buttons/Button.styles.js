import styled from 'styled-components'

export const Button = styled.button`
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 0.5rem;
	width: 8rem;
	border: 2px solid transparent;
	border-radius: 5px;
	font-weight: bold;
	transition: 300ms all;
	color: black;
	background-color: orange;

	:hover {
		cursor: pointer;
		background-color: rgb(254, 176, 31);
	}
`

export const ButtonContactWhiteStyled = styled(Button)`
	margin: 0 2rem 0 1rem;
	width: 8rem;
	border: 2px solid white;
	color: white;
	background-color: transparent;

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
	border: 2px solid orange;
	color: white;
	background-color: transparent;
	

	:hover {
		cursor: pointer;
		background-color: rgba(255, 166, 0, 0.193);
	}
`
