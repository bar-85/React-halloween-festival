import styled from 'styled-components'

export const Wrapper = styled.div`
	width: 100%;
	background-color: rgba(76, 19, 106, 0.564);
	border-top: 1px solid rgb(94, 0, 156);
	color: #eee;
	padding: 3rem 1rem;

	ul {
		display: flex;
		justify-content: center;
	}

	li {
		padding: 1rem;
	}

	li a {
		color: #fff;
	}

	li a:hover {
		padding-bottom: 12px;
		border-bottom: 3px solid orange;
		color: orange;
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
`
