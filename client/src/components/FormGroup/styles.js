import styled from "styled-components";
export const StyledFormGroup = styled.div`
  background: white;
  margin: 2rem 0;
  position: relative;
  ::before {
    background: linear-gradient(135deg, #83e4e2 0%, #a2ed56 100%);
    content: "";
    border-radius: 1rem 1rem 0 1rem;
    top: -1.5rem;
    height: 1.5rem;
    overflow: hidden;
    align-items: center;
    position: absolute;
    width: 9rem;
    box-shadow: 0.25rem 0.25rem 0.6rem rgba(0, 0, 0, 0.05),
      0 0.5rem 1.125rem rgba(75, 0, 0, 0.05);
    color: #1d1f20;
    content: ${(props) => `\"${props["data-name"]}\"`};
    display: flex;
    font-size: 1.5rem;
    justify-content: center;
    z-index: 1;
  }
  @media only screen and (max-width: 1024px) {
    margin-bottom: 0.5rem;
  }
`;
