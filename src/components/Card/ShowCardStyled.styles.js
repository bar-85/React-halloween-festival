import styled from 'styled-components'

export const Wrapper = styled.div`
	display: flex;
	justify-content: center;
    align-items: center;
	
	@media screen and (max-width: 900px) {
		
	}
`

export const CardStyled = styled.div`
    display: flex;
	flex-direction: column;
	background-color: rgba(50, 6, 73, 0.859);
	box-shadow: 0px 19px 60px rgba(255, 136, 0, 0.26);
	border-radius: 15px;
	padding: 2rem;
	color: white;
`
export const ButtonStyled = styled.div`
	align-self: center;
	margin: 2rem;
`