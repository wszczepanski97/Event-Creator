import * as React from 'react';
import {StyledFormError} from './styles';

export type FormErrorProps = {component:string, name:string};

const FormError = ({component, name}: FormErrorProps): JSX.Element => <StyledFormError component={component} name={name}/>;

export default FormError;