import styled from 'styled-components'

export const Wrapper = styled.div`
	width: 100%;
	background-color: rgba(76, 19, 106, 0.564);
	border-top: 1px solid rgb(94, 0, 156);
	color: #eee;
	padding: 3rem 1rem;
	margin-top: 2rem;

	ul {
		display: flex;
		justify-content: center;
	}

	li {
		padding: 1rem;
	}

	li {
		color: #fff;
	}

	li:hover {
		padding-bottom: 8px;
		border-bottom: 3px solid orange;
		color: orange;
	}

	@media screen and (max-width: 900px) {
		font-size: small;
	}

	@media screen and (max-width: 320px) {
		padding: 1rem 0.1rem;
		font-size: 0.7rem;
	}
`
export const Container = styled.div`
	max-width: 1240px;
	margin: auto;
	text-align: center;
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
