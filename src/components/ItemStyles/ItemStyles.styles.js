import styled from 'styled-components'

export const Wrapper = styled.div`
	display: flex;
	justify-content: space-between;
	
	@media screen and (max-width: 900px) {
		flex-direction: column;
	}
`

export const LeftSide = styled.div`
position: relative;
	padding: 3rem;
	padding-top: 0.5rem;
	display: flex;
	gap: 1.5rem;
	flex-direction: column;
`



