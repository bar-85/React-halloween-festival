import styled from 'styled-components'

export const SocialIconStyles = styled.div`
	display: inline-block;
	margin-left: 14px;

	a {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		width: 42px;
		height: 42px;
		border-radius: 50%;
		margin-right: 6px;
		line-height: 1;
		border: 1px solid rgba(255, 255, 255, 0.5);
		background: rgba(217, 217, 217, 0.1);
	}
	a::before {
		position: absolute;
		content: '';
		width: 42px;
		height: 42px;
		border-radius: 50%;
		background-color: rgba(255, 166, 0, 0.227);
		transform: scale(0);
		transition: 0.3s ease-in-out;
	}
	a:hover::before {
		transform: scale(1);
	}
	a img {
		width: 40%;
		z-index: 1;
		transition: 0.3s ease-in-out;
	}
	a:hover img {
		filter: brightness(0%) saturate(100%) invert(0%) sepia(7%) saturate(98%) hue-rotate(346deg) brightness(95%) contrast(86%);
	}

	@media screen and (max-width: 900px) {
		margin: 2rem 0 2rem 1rem;
	}
`
