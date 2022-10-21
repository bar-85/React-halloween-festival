import styled from 'styled-components'

export const Wrapper = styled.button`
	position: absolute;
	display: flex;
	align-items: center;
	justify-content: center;
	right: 3rem;
	top: 3rem;
	color: white;
	background-color: transparent;
	width: 8rem;
	border: 2px solid white;
	padding: 0.5rem;
	font-weight: bold;
	transition: 300ms all;

	:hover {
		cursor: pointer;
		background-color: rgba(255, 255, 255, 0.103);
		color: orange;
	}

	@media screen and (max-width: 900px) {
		display: none;
	}
`
