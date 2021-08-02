import {StyledFormSubmitButton} from './styles';

type FormSubmitButtonProps = {
  children: string,
  disabled: boolean
};

const FormSubmitButton = ({ children, disabled }: FormSubmitButtonProps): JSX.Element => {
  return (
    <StyledFormSubmitButton type="submit" disabled={disabled}>{children}</StyledFormSubmitButton>
  )
};

export default FormSubmitButton;
