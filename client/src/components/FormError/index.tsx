import {StyledFormError} from './styles';

export type FormErrorProps = {name:string};

const FormError = ({name}: FormErrorProps): JSX.Element => <StyledFormError component="span" name={name}/>;

export default FormError;