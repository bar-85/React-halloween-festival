import styled from 'styled-components'

export const Wrapper = styled.button`

	color: white;
	background-color: transparent;
	margin: 0 2rem 0 1rem;
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
		margin-bottom: 3rem;
		margin-left: 3rem;
	}
`
