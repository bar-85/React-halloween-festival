import styled from 'styled-components'

export const Wrapper = styled.button`
	padding: 0.5rem;
	font-weight: bold;
	border: 4px solid transparent;
	transition: 300ms all;
	display: flex;
	align-items: center;
	justify-content: center;
	color: white;
	background-color: transparent;
	width: 8rem;
	border: 2px solid orange;

	:hover {
		cursor: pointer;
		background-color: rgba(255, 166, 0, 0.193);
	}

	@media screen and (max-width: 320px) {
		font-size: 0.7rem;
	}
`
