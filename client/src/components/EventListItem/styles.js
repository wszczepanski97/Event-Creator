import styled from "styled-components";
export const StyledListItem = styled.li`
  border-radius: 0 0.5rem 0.5rem 0.5rem;
  box-shadow: 0.25rem 0.25rem 0.6rem rgba(0, 0, 0, 0.05),
    0 0.5rem 1.125rem rgba(75, 0, 0, 0.05);
  counter-increment: gradient-counter;
  width: 13rem;
  padding: 2rem 0 0 2rem;
  position: relative;
  margin: 1rem 1rem;
  ::before,
  ::after {
    background: linear-gradient(135deg, #83e4e2 0%, #a2ed56 100%);
    border-radius: 1rem 1rem 0 1rem;
    content: "";
    height: 3rem;
    left: -1rem;
    overflow: hidden;
    position: absolute;
    top: -1rem;
    width: 3rem;
  }
  ::before {
    align-items: center;
    box-shadow: 0.25rem 0.25rem 0.6rem rgba(0, 0, 0, 0.05),
      0 0.5rem 1.125rem rgba(75, 0, 0, 0.05);
    content: counter(gradient-counter);
    color: #1d1f20;
    display: flex;
    font-size: 1.5rem;
    justify-content: center;
    z-index: 1;
  }
`;
