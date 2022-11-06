import styled from 'styled-components'

export const Reasons = styled.div`
	margin-top: 3rem;
	display: flex;
	padding: 2rem;
	gap: 2rem;

	@media screen and (max-width: 1250px) {
		margin-top: 10rem;
		padding: 2rem;
		gap: 5rem;
	}

	@media screen and (max-width: 900px) {
		margin-top: 0;
		flex-direction: column-reverse;
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
	gap: 1rem;
	display: flex;
	flex-direction: column;
	font-size: 2.5rem;

	.title > span:nth-child(1) {
		font-weight: bold;
		color: white;
	}

	.title > span:nth-child(2) {
		color: orange;
		font-weight: bold;
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
			font-size: 0.8rem;
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
