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
`

export const RightSide = styled.div`
	flex: 1;
	position: relative;
	background-color: rgba(0, 0, 0, 0.26);

	@media screen and (max-width: 900px) {
		position: relative;
		background: none;
		display: flex;
		align-items: center;
		justify-content: center;
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
		margin-top: 0;
		font-size: small;
		align-self: center;
		transform: scale(0.8);
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

	@media screen and (max-width: 900px) {
		font-size: 3rem;
		align-items: center;
		justify-content: center;
	}
`


