import styled from 'styled-components'

export const Wrapper = styled.div`
	display: flex;
	justify-content: space-between;

	@media screen and (max-width: 900px) {
		flex-direction: column;
	}
`
export const LeftSide = styled.div`
	padding: 3rem;
	padding-top: 0.5rem;
	flex: 3.5;
	display: flex;
	gap: 1.5rem;
	flex-direction: column;

	.house-image {
		position: absolute;
		top: 13rem;
		left: 30%;
		height: 28rem;

		@media screen and (max-width: 900px) {
			&.house-image {
				position: relative;
				align-self: center;
				width: 23rem;
				height: 18rem;
				top: 13rem;
				left: 0rem;
				z-index: -3;
			}
		}

		@media screen and (max-width: 320px) {
			&.house-image { 
				width: 20rem;
				height: 16rem;
				top: 12rem;
				left: -1rem;
			}
	}
	}
`

export const RightSide = styled.div`
	flex: 1;
	position: relative;
	background-color: rgba(0, 0, 0, 0.26);

	.back-image {
		position: absolute;
		top: 10rem;
		left: -60%;
		height: 13rem;
		z-index: 3;
	}

	.moon-image {
		position: absolute;
		top: 5rem;
		left: -20%;
		height: 13rem;
		z-index: 0;
	}

	.bat-image {
	position: absolute;
	left: -230%;
	top: 7rem;
	width: 10rem;
	height: 10rem;
}

	@media screen and (max-width: 900px) {
		position: relative;
		background: none;
		display: flex;
		align-items: center;
		justify-content: center;

		.back-image {
			position: relative;
			height: 7rem;
			width: 10rem;
			left: -30%;
			top: -16rem;
			z-index: 2;
		}

		.moon-image {
			position: relative;
			align-self: center;
			width: 7rem;
			height: 7rem;
			left: 15rem;
			top: -18rem;
			z-index: -1;
		}

		.bat-image {
			position: relative;
			height: 7rem;
			width: 7rem;
			left: -65%;
			top: -13rem;
			z-index: 2;
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
		font-size: small;
		align-self: center;
		transform: scale(0.8);
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
		font-size: 3rem;
		align-items: center;
		justify-content: center;
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
		color: var(--gray);
		text-transform: none;
	}

	@media screen and (max-width: 900px) {
		align-self: center;
		margin-top: 2rem;

		div > span:nth-of-type(1) {
			font-size: large;
			align-self: center;
		}

		div > span:nth-of-type(2) {
			font-size: small;
			align-self: center;
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
