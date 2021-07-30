import styled from "styled-components";
import { Field } from "formik";
export const StyledFormField = styled.input`
  box-shadow: 0.25rem 0.25rem 0.6rem rgba(0, 0, 0, 0.05),
    0 0.5rem 1.125rem rgba(75, 0, 0, 0.05);
  border: 0.125rem solid #f0f0f0;
  display: block;
  padding: 0.625rem;
  width: 100%;
  :focus {
    outline: 0;
    border-color: #777;
  }
  :focus:required:invalid {
    background: pink;
  }

  :required:valid {
    background: #98eb75;
    background-size: 1.25rem;
    background-repeat: no-repeat;
    background-position: 1.25rem;
  }
  @media only screen and (max-width: 600px) {
    padding: 0.5rem;
  }
`;
