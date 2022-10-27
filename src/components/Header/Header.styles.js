import styled from 'styled-components'

export const Wrapper = styled.div`
	display: flex;
	justify-content: space-between;

	@media screen and (max-width: 900px) {
		max-width: 100%;
	}
`

export const Hamburger = styled.div`
	display: none;

	@media screen and (max-width: 900px) {
		position: fixed;
		right: 1rem;
		display: block;
		margin-top: 1rem;
		z-index: 20;
	}
`
export const Nav = styled.div`
	&.header-menu {
		align-items: center;
		list-style: none;
		display: flex;
		gap: 2rem;
	}

	li {
		cursor: pointer;
		color: white;
	}

	li:hover {
		cursor: pointer;
		color: orange;
	}

	@media screen and (max-width: 900px) {
		&.header-menu {
			position: fixed;
			right: -100%;
			top: 100px;
			flex-direction: column;
			background-color: rgba(76, 19, 106, 0.966);
			width: 52%;
			height: auto;
			z-index: 999;
			border-top-left-radius: 40px;
			border-bottom-left-radius: 40px;
			border: 2px solid orange;
			text-align: center;
			transition: 0.3s;
		}

		@media screen and (max-width: 320px) {
			&.header-menu {
				top: 10%;
			}
		}

		&.header-menu.active {
			right: -3px;
		}

		li {
			margin-top: 2.5rem;
		}
	}
`
