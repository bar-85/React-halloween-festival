import styled from 'styled-components'

export const CarouselStyled = styled.div`
	width: 100%;
	margin: 5rem 0 9rem 0;

	.tCarousel {
		padding: 2rem;
	}

	.caro {
		height: 20rem;
		display: flex;
		flex-direction: column;
		position: relative;
		background: #c800ff3d;
		box-shadow: 2px 0px 20px rgba(255, 136, 0, 0.152);
		border-radius: 0.5rem;
		align-items: center;
		justify-content: center;
		padding: 2rem;
		gap: 0.5rem;
		

		img {
			top: 1rem;
			position: absolute;
			width: 6rem;
			margin: 1rem;
		}

		> span:nth-of-type(1) {
			color: orange;
			align-items: center;
			font-size: 1.1rem;
			letter-spacing: 1px;
			margin-top: 6rem;
		}

		> hr {
			height: 1px;
			width: 50%;
			background-color: #2b0b42;
			border: none;
		}

		> span:nth-of-type(2) {
			color: white;
		}

		@media screen and (max-width: 480px) {
			margin: 1rem 0 1rem 0;

			> span:nth-of-type(2) {
				font-size: 0.8rem;
		}


		}

		@media screen and (max-width: 320px) {
			> span:nth-of-type(1) {
				font-size: 0.9rem;
			}

			> span:nth-of-type(2) {
				font-size: 0.75rem;
		}
		}
	}
`

export const CarouselHeader = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	margin: 4rem;
	flex-direction: column;

	h2 {
		color: white;
		font-size: 2.5rem;

		span {
			color: orange;
		}
	}

	@media screen and (max-width: 480px) {
		margin: -2rem 0 -4rem 0;

		h2 {
			font-size: 1.3rem;
		}
	}

	@media screen and (max-width: 320px) {
		h2 {
			font-size: 1.35rem;
		}
	}
`
