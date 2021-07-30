import { Form } from "formik";
import styled from "styled-components";
export const StyledForm = styled(Form)`
  padding: 1.875rem 2.5rem;
  margin-bottom: 0.625rem;
  padding-bottom: 1.25rem;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  max-height: 90%;
  padding: 1rem 1.5rem;
  @media only screen and (max-width: 600px) {
    font-size: 2rem;
  }
`;
