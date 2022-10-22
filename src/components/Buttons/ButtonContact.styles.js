import styled from 'styled-components'

export const Wrapper = styled.button`
	padding: 0.5rem;
	font-weight: bold;
	border: 4px solid transparent;
	transition: 300ms all;
	display: flex;
	align-items: center;
	justify-content: center;
	color: black;
	background-color: orange;
	width: 8rem;

	:hover {
		cursor: pointer;
		background-color: rgb(254, 176, 31);
	}

	@media screen and (max-width: 320px) {
		font-size: 0.7rem;
	}
`
