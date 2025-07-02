import styled from 'styled-components'

export const Wrapper = styled.div`
	background-image: linear-gradient(to right top, #2b0b42, #390c5c, #460d78, #520d96, #5e0eb5);
	mix-blend-mode: overlay;
	display: flex;
	flex-direction: column;
	gap: 10rem;
	overflow: hidden;
	::-webkit-scrollbar {
		display: none;
	}

	@media screen and (max-width: 1250px) {
		gap: 8rem;
	}

	@media screen and (max-width: 900px) {
		gap: 6rem;
	}

	@media screen and (max-width: 480px) {
		gap: 3rem;
	}
`
