import styled from 'styled-components'

export const Reasons = styled.div`
	display: flex;
	margin-top: 3rem;
	padding: 2rem;
	gap: 2rem;

	@media screen and (max-width: 1250px) {
		margin-top: 10rem;
		padding: 2rem;
		gap: 5rem;
	}

	@media screen and (max-width: 900px) {
		flex-direction: column-reverse;
		margin-top: 0;
	}
`
export const LeftSide = styled.div`
	flex: 1 1;
	display: flex;
	align-items: center;
	justify-content: center;

	img {
		width: 60%;
	}

	@media screen and (max-width: 900px) {
		img {
			width: 50%;
		}
	}
`
export const RightSide = styled.div`
	flex: 1 1;
	display: flex;
	flex-direction: column;
	font-size: 2.5rem;
	gap: 1rem;

	.title > span:nth-child(1) {
		font-weight: bold;
		color: white;
	}

	.title > span:nth-child(2) {
		font-weight: bold;
		color: orange;
	}

	@media screen and (max-width: 1250px) {
		font-size: 2.5rem;
	}

	@media screen and (max-width: 900px) {
		padding-left: 5rem;
		font-size: 2.5rem;
		margin-top: -4rem;
	}
	@media screen and (max-width: 768px) {
		padding-left: 2rem;
		font-size: 2rem;
	}

	@media screen and (max-width: 480px) {
		padding-left: 1rem;
		font-size: 1.5rem;
	}

	@media screen and (max-width: 320px) {
	}
`
export const Details = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1rem;

	div {
		display: flex;
		align-items: center;
		gap: 1rem;
	}

	div > span {
		font-size: 1rem;
		color: white;
	}

	div > img {
		width: auto;
		height: 4rem;
	}

	@media screen and (max-width: 480px) {
		div > span {
			font-size: 1rem;
		}

		div > img {
			height: 2rem;
		}
	}

	@media screen and (max-width: 320px) {
		div > span {
			font-size: 0.75rem;
		}
	}
`
