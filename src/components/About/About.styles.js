import styled from 'styled-components'

export const AboutStyled = styled.div`
	padding: 0 3rem 0 3rem;
	display: flex;
	height: 30rem;
	margin-bottom: 19rem;
	margin-top: 20rem;

	@media screen and (max-width: 1250px) {
		margin-top: 10rem;
		padding: 2rem;
		gap: 5rem;
		
		
	}

	@media screen and (max-width: 900px) {
		margin-top: 0;
		flex-direction: column;
		gap: 5rem;
		height: 66rem;
		padding: 0;
	}
`

export const Awesome = styled.div`
	display: flex;
	flex-direction: column;
	position: relative;

	span:nth-child(1) {
		color: black;
		font-size: 2.5rem;
		font-weight: bold;
	}
	span:nth-child(2) {
		color: orange;
		font-size: 2.5rem;
		font-weight: bold;
	}
	span:nth-child(3) {
		color: #000000;
		font-size: 1rem;
		margin-top: 1.2rem;
		margin-bottom: 2rem;
	}

	@media screen and (max-width: 900px) {
		align-items: center;

		span:nth-child(1) {
			font-size: 2.3rem;
		}

		span:nth-child(2) {
			font-size: 2.3rem;
			margin: 1rem;
		}
		span:nth-child(3) {
			color: gray;
			font-size: 1.2rem;
		}
	}

	@media screen and (max-width: 480px) {
		align-items: center;

		span:nth-child(1) {
			font-size: 1.5rem;
		}

		span:nth-child(2) {
			font-size: 1.5rem;
			margin: 1rem;
		}
		span:nth-child(3) {
			color: gray;
			font-size: 14px;
		}
	}
`

export const Cards = styled.div`
	position: relative;

	* {
		position: absolute;
	}

	@media screen and (min-width: 1250px) {
		margin-left: 5rem;
	}


	@media screen and (max-width: 1250px) {
		margin-left: -25rem;
	}

	@media screen and (max-width: 900px) {
		margin-left: 0;
		align-items: center;
		display: flex;
		flex-direction: column;
		gap: 2rem;

		* {
			position: static;
		}
	}
`
