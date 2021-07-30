import * as React from 'react';
import {StyledWrapper} from './styles';

type HeadingProps = {children: string | JSX.Element | JSX.Element[]};

const Wrapper = ({ children }: HeadingProps): JSX.Element => <StyledWrapper>{children}</StyledWrapper>;

export default Wrapper;
