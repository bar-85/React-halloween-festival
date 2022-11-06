import styled from 'styled-components'

export const BlurStyled = styled.div`
	position: absolute;
	width: 25rem;
	height: 25rem;
	right: 0;
	background: orange;
	border-radius: 20%;
	filter: blur(212px);
	z-index: -9;

	@media screen and (max-width: 900px) {
		top: 60%;
		width: 10rem;	
	}
`
