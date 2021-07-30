import * as React from 'react';
import {StyledFormField} from './styles';

type FormFieldProps = {
    name: string,
    type: string,
    placeholder?: string
    min?: number;
    max?: number;
};

const FormField = (props: FormFieldProps): JSX.Element => <StyledFormField {...props}/>

export default FormField;
