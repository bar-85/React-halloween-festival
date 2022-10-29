import styled from 'styled-components'

export const TicketCards = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 3rem;
	margin: 7rem 0 10rem 0;

	@media screen and (max-width: 900px) {
		flex-direction: column;
	}

	@media screen and (max-width: 480px) {
        margin: 4rem 0 4rem 0;
	}

`

export const Card = styled.div`
	display: flex;
	flex-direction: column;
	background-color: rgba(76, 19, 106, 0.675);
	box-shadow: 0px 19px 60px rgba(255, 136, 0, 0.26);
	border-radius: 15px;
	padding: 2rem;
	color: white;

	:nth-child(2) {
		background: #c800ff5f;
		scale: 1.1;
	}

	:hover {
		background: rgba(76, 19, 106, 0.24);
	}

	:hover:nth-child(2) {
		background: #c800ff41;
	}

	> :nth-child(1) {
		font-size: 1.7rem;
		font-weight: bold;
		margin: 2rem;
		align-self: center;
		color: white;
	}

	> :nth-child(2) {
		font-size: 2rem;
		font-weight: bold;
		align-self: center;
		margin-bottom: 2rem;
		color: orange;
	}

	.button {
		margin: 2rem;
		align-self: center;
	}

	@media screen and (max-width: 900px) {
		:nth-child(2) {
			scale: none;
		}
	}

	@media screen and (max-width: 320px) {
        > :nth-child(1) {
        font-size: 1.35rem;
        }
	}
`

export const Features = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1rem;

	.feature {
		display: flex;
		align-items: center;
		gap: 1rem;

		img {
			width: 1rem;
		}
	}
`
