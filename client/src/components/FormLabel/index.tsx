import * as React from 'react';
import {StyledLabel} from './styles';

type FormLabelProps = {htmlFor: string};

const FormLabel = (props: FormLabelProps): JSX.Element => <StyledLabel {...props}/>;

export default FormLabel;
