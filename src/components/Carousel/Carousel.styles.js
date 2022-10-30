import styled from 'styled-components'

export const CarouselStyled = styled.div`
	width: 100%;
    
    margin: 5rem 0 9rem 0;

	.tCarousel {
		padding: 2rem;
	}

	.caro {
        height: 19rem;
		display: flex;
		flex-direction: column;
		position: relative;
		background: #c800ff3d;
		border-radius: 0.5rem;
		align-items: center;
		justify-content: center;
		padding: 1rem;
		gap: 1rem;
		box-shadow: 0rem 1rem 3rem -50px #7d7d7d;

		img {
			width: 3rem;
		}

        >span:nth-of-type(1) {
            color: white;
            align-items: center;
            font-size: 0.8rem;
            letter-spacing: 1px;
            margin-top: 2rem;
        }

        >hr {
            height: 1px;
            width: 50%;
            background-color: orange;
            border: none;
        }

        >span:nth-last-of-type(2) {
            font-size: 500;
        }
	}
`
