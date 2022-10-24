import styled from 'styled-components'

export const CardStyled = styled.div`
	width: 12rem;
	height: 17rem;
	position: absolute;
	background: rgba(255, 255, 255, 0.26);
	border: 1px solid orange;
	box-shadow: 0px 19px 60px rgba(255, 136, 0, 0.26);
	border-radius: 20px;

	img {
		
		width: 100%;
		height: 100%;
		border-radius: 20px;
	}

	@media screen and (max-width: 900px) {
     
		width: 12rem;
        height: 17rem;
		
	}
`
