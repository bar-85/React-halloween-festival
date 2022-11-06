import styled from 'styled-components'

export const TicketHeader = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	margin: 4rem;
	flex-direction: column;

	h1 {
		color: white;
		font-size: 2.5rem;

		span {
			color: orange;
		}
	}

	@media screen and (max-width: 480px) {
		margin: 4rem;


		h1 {
			font-size: 1.5rem;
		}
	}

	@media screen and (max-width: 320px) {
        h1 {
			font-size: 1.35rem;
		}
	}
`
