import styled from 'styled-components'

export const Hamburger = styled.div`
	display: none;

	@media screen and (max-width: 900px) {
		position: fixed;
		right: 1rem;
		display: block;
		margin-top: 1rem;
		z-index: 20;
	}
`
