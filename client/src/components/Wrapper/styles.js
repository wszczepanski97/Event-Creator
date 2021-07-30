import styled from "styled-components";
export const StyledWrapper = styled.section`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  height: 92vh;
  @media only screen and (max-width: 640px) {
    font-size: 1.8rem;
  }
  @media only screen and (min-width: 568px) and (max-width: 823px) {
    height: auto;
    flex-direction: column;
  }
`;
