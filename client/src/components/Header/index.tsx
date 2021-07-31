import {StyledHeader} from './styles.js';

type HeadingProps = {children: string | JSX.Element | JSX.Element[]};

const Header = ({ children }: HeadingProps): JSX.Element => <StyledHeader>{children}</StyledHeader>;

export default Header;
