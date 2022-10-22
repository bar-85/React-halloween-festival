import styled from 'styled-components'

export const Wrapper = styled.div`
  background-image: linear-gradient(to right top, #2b0b42, #390c5c, #460d78, #520d96, #5e0eb5);
  mix-blend-mode: overlay;
  background-color: var(--appColor);
  display: flex;
  flex-direction: column;
  gap: 6rem;
  overflow: hidden;
::-webkit-scrollbar{
  display: none;
}
`