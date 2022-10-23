import styled from 'styled-components'

export const LogoHeaderStyled = styled.div`
	img {
		width: 9rem;
		height: 7rem;
		padding-top: 0.5rem;
		margin-left: 2rem;
	}

	@media screen and (max-width: 900px) {
		img {
			margin-left: -2rem;
		}
	}

	@media screen and (max-width: 320px) {
		img {
			margin-left: -2rem;
		}
	}
`
