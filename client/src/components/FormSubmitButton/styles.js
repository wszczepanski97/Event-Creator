import styled from "styled-components";
export const StyledFormSubmitButton = styled.button`
  background-color: #8e44ad;
  border: 0.125rem solid #8e44ad;
  border-radius: 0.25rem;
  color: #fff;
  display: block;
  font-family: inherit;
  font-size: 1.5rem;
  padding: 0.625rem;
  margin-top: 1.25rem;
  width: 100%;
  cursor: pointer;
  :disabled {
    opacity: 0.5;
  }
  @media only screen and (max-width: 600px) {
    margin-top: 0.625rem;
  }
`;
