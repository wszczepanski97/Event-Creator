import styled, { keyframes } from "styled-components";
const animatedText = keyframes`
  from{width: 0;}
  to{width: 100%;}
`;

export const StyledHeader = styled.header`
  white-space: nowrap;
  overflow: hidden;
  font-size: 4rem;
  color: rgba(0, 0, 0, 0.7);
  animation: ${animatedText} 4s steps(29, end) 1s 1 normal both;
  border-bottom-width: 0.063rem;
  border-bottom-style: solid;
  border-bottom-color: #e5e5e5;
  height: 8vh;
  display: flex;
  align-items: center;
  justify-content: center;
  @media only screen and (max-width: 823px) {
    font-size: 1.8rem;
    line-height: 1.8rem;
  }
  @media only screen and (min-width: 568px) and (max-width: 823px) {
    height: auto;
  }
`;
