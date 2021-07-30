import * as React from 'react';
import {StyledFormTitle} from './styles';

type HeadingProps = {children: string | JSX.Element | JSX.Element[]};

const CardTitle = ({ children }: HeadingProps): JSX.Element => <StyledFormTitle>{children}</StyledFormTitle>;

export default CardTitle;
