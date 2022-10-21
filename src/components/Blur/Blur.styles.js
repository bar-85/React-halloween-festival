import styled from 'styled-components'

export const BlurStyled = styled.div`
	width: 25rem;
	height: 25rem;
	right: 0;
	background: orange;
	position: absolute;
	border-radius: 50%;
	filter: blur(212px);
	z-index: -9;

	@media screen and (max-width: 900px) {
		width: 10rem;
		top: 60%;
	}
`
