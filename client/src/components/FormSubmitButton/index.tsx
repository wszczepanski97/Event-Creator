import {StyledFormSubmitButton} from './styles';

type FormSubmitButtonProps = {
  children: string,
  type: 'submit'|'reset'|'button'|undefined,
  disabled: boolean
};

const FormSubmitButton = ({ children, type, disabled }: FormSubmitButtonProps): JSX.Element => {
  return (
    <StyledFormSubmitButton type={type} disabled={disabled}>{children}</StyledFormSubmitButton>
  )
};

export default FormSubmitButton;
