import styled from "styled-components";
export const StyledEventList = styled.ol`
  list-style: none;
  padding: 1.875rem 2.5rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin: 0;
  max-height: 90%;
  overflow-y: scroll;
  scrollbar-width: thin;
  scrollbar-color: #90a4ae #cfd8dc;
  ::-webkit-scrollbar {
    width: 1rem;
  }
  ::-webkit-scrollbar-track {
    background: #cfd8dc;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #90a4ae;
    border-radius: 0.375rem;
    border: 0.188rem solid #cfd8dc;
  }
`;
