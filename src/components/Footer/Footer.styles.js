import styled from 'styled-components'

export const Wrapper = styled.div`
	width: 100%;
	padding: 3rem 1rem;
	margin-top: 2rem;
	background-color: rgba(76, 19, 106, 0.564);
	border-top: 1px solid rgba(255, 187, 0, 0.258);
	color: white;

	@media screen and (max-width: 320px) {
		padding: 1rem 0.1rem;
		font-size: 1rem;
	}
`

export const Nav = styled.div`
		display: flex;
		justify-content: center;

	.link {
		padding: 1rem;
		color: #fff;
	}

	.link:hover {
		border-bottom: 3px solid orange;
		color: orange;
	}

	@media screen and (max-width: 900px) {
		font-size: 1rem;

		.link {
			padding: 0.5rem;
		}
	}
`

export const BottomText = styled.div`
	text-align: center;
	padding-top: 3rem;

	span {
		margin-bottom: 1rem;
	}

	@media screen and (max-width: 320px) {
		padding-top: 1.5rem;
	}
`
