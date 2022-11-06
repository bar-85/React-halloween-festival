import styled from 'styled-components'

export const AboutStyled = styled.div`
	display: flex;
	padding: 0 3rem 0 3rem;
	margin-bottom: 5rem;
	margin-top: 5rem;
	height: 30rem;

	@media screen and (max-width: 1250px) {
		margin-top: 10rem;
		padding: 2rem;
		gap: 5rem;
	}

	@media screen and (max-width: 900px) {
		flex-direction: column;
		margin-top: 0;
		height: 66rem;
		padding: 0;
		gap: 5rem;
	}
`

export const Awesome = styled.div`
	display: flex;
	flex-direction: column;
	position: relative;

	span:nth-child(1) {
		font-size: 2.5rem;
		font-weight: bold;
		color: white;
	}
	span:nth-child(2) {
		font-size: 2.5rem;
		font-weight: bold;
		color: orange;
	}
	span:nth-child(3) {
		font-size: 1rem;
		margin-top: 1.2rem;
		margin-bottom: 2rem;
		color: white;
	}

	@media screen and (max-width: 900px) {
		align-items: center;

		span:nth-child(1) {
			font-size: 2.3rem;
		}

		span:nth-child(2) {
			font-size: 2.3rem;
		}
		span:nth-child(3) {
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
		}
		span:nth-child(3) {
			font-size: 0.8rem;
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
		align-items: center;
		display: flex;
		flex-direction: column;
		margin-left: 0;
		gap: 2rem;

		* {
			position: static;
		}
	}
`
