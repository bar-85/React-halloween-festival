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
	flex: 2.8;
	display: flex;
	gap: 1.5rem;
	flex-direction: column;
`

export const RightSide = styled.div`
	flex: 1;
	position: relative;
	background-color: rgba(0, 0, 0, 0.144);
	border-radius: 10px;

    @media screen and (max-width: 900px) {
		position: relative;
		background: none;
		display: flex;
		align-items: center;
		justify-content: center;
    }

`