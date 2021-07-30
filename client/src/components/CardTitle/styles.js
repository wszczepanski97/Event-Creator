import styled from "styled-components";
export const StyledFormTitle = styled.h1`
  font-family: "Caveat", cursive;
  font-size: 2.5rem;
  border-bottom: 0.063rem solid #f0f0f0;
  color: rgba(0, 0, 0, 0.7);
  background: linear-gradient(135deg, #c6c6ef 0%, #f5b8c8 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  height: 10%;
  @media only screen and (min-width: 280px) and (max-width: 823px) {
    font-size: 1.8rem;
    height: auto;
    line-height: 1.8rem;
  }
`;
