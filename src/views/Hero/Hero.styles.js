import styled from 'styled-components'

export const ImgStyled = styled.div`
	img {
		max-width: 100%;
		height: auto;
	}

	.house {
		position: absolute;
		top: 25%;
		left: 25%;
		z-index: -3;

		@media screen and (max-width: 1150px) {
			top: 20rem;
		}

		@media screen and (max-width: 900px) {
			position: relative;
			margin-bottom: 1rem;
			top: 13rem;
			left: 11%;
			z-index: -3;

			.house-image {
				width: 70%;
			}
		}
	}

	.witch {
		position: absolute;
		right: 6%;
		top: 16%;
		z-index: -2;
		width: 15rem;

		@media screen and (max-width: 1150px) {
			width: 10rem;
			top: 30%;
		}

		@media screen and (max-width: 900px) {
			position: relative;
			width: 11rem;
			left: 61%;
			top: -30rem;
			z-index: 2;
		}

		@media screen and (max-width: 768px) {
			top: -27rem;
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
		top: 7rem;
		z-index: -3;

		.bat-image {
			width: 10rem;
			height: 10rem;
		}
		@media screen and (max-width: 1150px) {
			left: 35%;
		}

		@media screen and (max-width: 900px) {
			position: relative;
			left: 17%;
			top: -18rem;
			z-index: 3;
		}

		@media screen and (max-width: 768px) {
			top: -16rem;
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
	margin-top: 4rem;
	color: white;
	background-color: rgba(76, 19, 106, 0.564);
	border-radius: 1rem;
	width: fit-content;
	padding: 20px 13px;
	text-transform: uppercase;
	position: relative;
	display: flex;
	align-items: center;
	justify-content: flex-start;

	span {
		z-index: 2;
	}

	div {
		position: absolute;
		background-color: rgba(255, 166, 0, 0.026);
		box-shadow: 0px 0px 79px 62px rgba(255, 166, 0, 0.196);
		width: 0rem;
		height: 100%;
		left: 8px;
		border-radius: 3rem;
		z-index: 1;
	}

	@media screen and (max-width: 900px) {
		margin: 0 0 1rem 0;
		font-size: 1.5rem;
		align-self: center;
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
	gap: 1.5rem;
	text-transform: uppercase;
	font-size: 4.5rem;
	font-weight: bold;
	color: white;
	z-index: 2;

	.stroke-text {
		color: transparent;
		font-family: Arial, Helvetica, sans-serif;
		-webkit-text-stroke-width: 1.5px;
		-webkit-text-stroke-color: orange;
	}

	@media screen and (max-width: 900px) {
		font-size: 4.5rem;
		align-items: center;
		justify-content: center;
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
		color: orange;
		font-size: 2rem;
	}

	div > span:nth-of-type(2) {
		color: #b7adad;
		text-transform: none;
	}

	@media screen and (max-width: 900px) {
		align-self: center;
		margin-top: 2rem;

		div > span:nth-of-type(1) {
			font-size: 2rem;
			align-self: center;
		}

		div > span:nth-of-type(2) {
			font-size: 1rem;
			align-self: center;
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
	gap: 1rem;
	font-weight: normal;

	@media screen and (max-width: 900px) {
		justify-content: center;
		margin-top: 2rem;
	}
	@media screen and (max-width: 320px) {
		margin-top: 1rem;
	}
`
