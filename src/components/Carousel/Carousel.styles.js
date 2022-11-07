import styled from 'styled-components'

export const CarouselStyled = styled.div`
	width: 100%;
	margin: 2rem 0 2rem 0;

	.tCarousel {
		padding: 2rem;
	}

	.caro {
		display: flex;
		flex-direction: column;
		position: relative;
		align-items: center;
		justify-content: center;
		height: 20rem;
		padding: 2rem;
		border-radius: 0.5rem;
		background: #3e024f;
		box-shadow: 2px 0px 20px rgba(255, 136, 0, 0.152);
		gap: 0.5rem;

		img {
			position: absolute;
			top: 1rem;
			width: 6rem;
			margin: 1rem;
		}

		> span:nth-of-type(1) {
			align-items: center;
			font-size: 1.1rem;
			letter-spacing: 1px;
			margin-top: 6rem;
			color: #ffb732;
		}

		> hr {
			height: 1px;
			width: 50%;
			background-color: #9200fb;
			border: none;
		}

		> span:nth-of-type(2) {
			color: white;
		}

		@media screen and (max-width: 480px) {
			> span:nth-of-type(2) {
				font-size: 1rem;
			}
		}

		@media screen and (max-width: 320px) {
			> span:nth-of-type(1) {
				font-size: 1rem;
			}

			> span:nth-of-type(2) {
				font-size: 1rem;
			}
		}
	}
`

export const CarouselHeader = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	margin-top: 3rem;

	h2 {
		font-size: 2.5rem;
		color: orange;

		span {
			color: white;
		}
	}

	@media screen and (max-width: 1250px) {
		margin-top: 8rem;
	}

	@media screen and (max-width: 480px) {
		margin: 9rem 0 0rem 0;

		h2 {
			font-size: 1.5rem;
		}
	}

	@media screen and (max-width: 320px) {
		h2 {
			font-size: 1.35rem;
		}
	}
`
