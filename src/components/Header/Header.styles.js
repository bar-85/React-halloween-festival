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
		display: block;
		margin-top: 1rem;
		right: 1rem;
		z-index: 20;
	}
`
export const Nav = styled.div`
	&.header-menu {
		align-items: center;
		display: flex;
		list-style: none;
		gap: 2rem;
	}

	.link {
		color: white;
		cursor: pointer;
	}

	.link:hover {
		color: orange;
		cursor: pointer;
	}

	@media screen and (max-width: 900px) {
		&.header-menu {
			position: fixed;
			flex-direction: column;
			right: -100%;
			top: 100px;
			text-align: center;
			background-color: rgba(76, 19, 106, 0.966);
			width: 52%;
			height: auto;
			border-top-left-radius: 40px;
			border-bottom-left-radius: 40px;
			border: 2px solid orange;
			transition: 0.3s;
			z-index: 999;
		}

		@media screen and (max-width: 320px) {
			&.header-menu {
				top: 13.5%;
				gap: 1rem;
			}
		}

		&.header-menu.active {
			right: -3px;
		}

		.link {
			margin-top: 2.5rem;
		}
	}
`
