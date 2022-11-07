import styled from 'styled-components'

export const LeftSide = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	padding: 3rem;
	padding-top: 0.5rem;
	gap: 1.5rem;
`

export const ImgStyled = styled.div`
	img {
		max-width: 100%;
		height: auto;
	}

	.house {
		position: absolute;
		top: 28%;
		left: 25%;
		width: 60rem;
		height: auto;
		z-index: -3;

		@media screen and (max-width: 900px) {
			position: relative;
			margin-bottom: 1rem;
			top: 13rem;
			left: 5%;
			width: 80%;
			z-index: -3;
		}
	}

	.witch {
		position: absolute;
		right: 6%;
		top: 16%;
		width: 15rem;
		height: auto;
		z-index: -2;

		@media screen and (max-width: 1150px) {
			width: 10rem;
			top: 30%;
		}

		@media screen and (max-width: 900px) {
			position: relative;
			width: 11rem;
			left: 61%;
			top: -38rem;
			z-index: 2;
		}

		@media screen and (max-width: 768px) {
			top: -31rem;
			width: 8rem;
		}

		@media screen and (max-width: 480px) {
			top: -20rem;
		}

		@media screen and (max-width: 320px) {
			left: 56%;
			width: 7rem;
		}
	}

	.bat {
		position: absolute;
		left: 30%;
		top: 5rem;
		width: 10rem;
		height: auto;
		z-index: -3;

		@media screen and (max-width: 1150px) {
			left: 35%;
		}

		@media screen and (max-width: 900px) {
			position: relative;
			left: 17%;
			top: -23rem;
			z-index: 3;
		}

		@media screen and (max-width: 768px) {
			top: -18rem;
		}

		@media screen and (max-width: 480px) {
			top: -8rem;
			width: 30%;
			left: 7%;
		}

		@media screen and (max-width: 320px) {
			left: 5%;
			width: 40%;
		}
	}
`

export const UpTitle = styled.div`
	position: relative;
	display: flex;
	align-items: center;
	justify-content: flex-start;
	margin-top: 0.1rem;
	width: fit-content;
	padding: 20px 13px;
	border-radius: 1rem;
	color: white;
	background-color: rgba(76, 19, 106, 0.564);
	text-transform: uppercase;

	span {
		z-index: 2;
	}

	div {
		position: absolute;
		width: 0rem;
		height: 100%;
		left: 8px;
		border-radius: 3rem;
		background-color: rgba(255, 166, 0, 0.026);
		box-shadow: 0px 0px 79px 62px rgba(255, 166, 0, 0.196);
		z-index: 1;
	}

	@media screen and (max-width: 900px) {
		align-self: center;
		margin: 0 0 1rem 0;
		font-size: 1.5rem;
		transform: scale(0.8);
	}

	@media screen and (max-width: 768px) {
		font-size: 1.2rem;
	}

	@media screen and (max-width: 480px) {
		font-size: 0.95rem;
	}

	@media screen and (max-width: 320px) {
		font-size: 0.7rem;
	}
`

export const MediumTitle = styled.div`
	display: flex;
	flex-direction: column;
	font-size: 4.5rem;
	font-weight: bold;
	color: white;
	text-transform: uppercase;
	gap: 1.5rem;
	z-index: 2;

	.stroke-text {
		color: transparent;
		font-family: Arial, Helvetica, sans-serif;
		-webkit-text-stroke-width: 1.5px;
		-webkit-text-stroke-color: orange;
	}

	@media screen and (max-width: 900px) {
		align-items: center;
		justify-content: center;
		font-size: 4.5rem;
	}

	@media screen and (max-width: 768px) {
		font-size: 4rem;
	}

	@media screen and (max-width: 480px) {
		font-size: 3rem;
	}

	@media screen and (max-width: 320px) {
		font-size: 2.5rem;
	}
`

export const FestivalDate = styled.div`
	display: flex;
	gap: 2rem;

	div {
		display: flex;
		flex-direction: column;
	}

	div > span:nth-of-type(1) {
		font-size: 2rem;
		color: orange;
	}

	div > span:nth-of-type(2) {
		color: #b7adad;
		text-transform: none;
	}

	@media screen and (max-width: 900px) {
		align-self: center;
		margin-top: 2rem;

		div > span:nth-of-type(1) {
			align-self: center;
			font-size: 2rem;
		}

		div > span:nth-of-type(2) {
			align-self: center;
			font-size: 1rem;
		}
	}

	@media screen and (max-width: 768px) {
		div > span:nth-of-type(1) {
			font-size: 1.8rem;
		}

		div > span:nth-of-type(2) {
			font-size: 0.9rem;
		}
	}

	@media screen and (max-width: 480px) {
		div > span:nth-of-type(1) {
			font-size: 1.5rem;
		}

		div > span:nth-of-type(2) {
			font-size: 0.8rem;
		}
	}

	@media screen and (max-width: 320px) {
		div > span:nth-of-type(1) {
			font-size: 1.3rem;
		}

		div > span:nth-of-type(2) {
			font-size: 0.7rem;
		}
	}
`

export const HeroButton = styled.div`
	display: flex;
	font-weight: normal;
	gap: 1rem;

	@media screen and (max-width: 900px) {
		justify-content: center;
		margin-top: 2rem;
	}
	@media screen and (max-width: 320px) {
		margin-top: 1rem;
	}
`
