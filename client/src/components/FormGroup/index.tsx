import * as React from 'react';
import {StyledFormGroup} from './styles';

type FormGroupProps = {children: string | JSX.Element | JSX.Element[], name: string};

const FormGroup = ({ children, name }: FormGroupProps): JSX.Element => <StyledFormGroup data-name={name}>{children}</StyledFormGroup>

export default FormGroup;
