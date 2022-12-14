import styled from 'styled-components'

export const ContactCard = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	height: 100vh;
	width: 100%;
	background-color: rgba(0, 0, 0, 0.775);
	z-index: 10;	
`
export const Wrapper = styled.div`
	position: fixed;
	display: flex;
	align-items: center;
	justify-content: center;
	top: 40vh;
	left: 10%; 
	width: 80%;
	z-index: 100;
`

export const CardStyled = styled.div`
	position: absolute;
	display: flex;
	flex-direction: column;
	border-radius: 15px;
	padding: 2rem;
	background-color: rgb(95, 17, 136);
	box-shadow: 0px 19px 60px rgba(255, 136, 0, 0.26);
	color: white;

	@media screen and (max-width: 320px) {
		padding: 0.8rem;
		font-size: 0.9rem;
	}
`
export const ButtonStyled = styled.div`
	display: flex;
	flex-direction: row;
	align-self: center;
	margin-top: 3rem;
	gap: 1.5rem;
`
