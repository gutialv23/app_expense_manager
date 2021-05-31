import styled from 'styled-components';
import theme from '../theme';
import { ReactComponent as IconRegister } from '../images/register.svg';
import { ReactComponent as IconLogin    } from '../images/login.svg';

const Form = styled.form`
	padding: 0 2.5rem;  /* 40px. */

	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	input {
		width: 100%;
		text-align: center;
		padding: 2.5rem 0;
		font-family: 'Work Sans', sans-serif;
		&::placeholder {
			color: rgba(0,0,0,.2);
		}
	}

	@media(max-width: 60rem) {  /* Media query at 950px. */
		justify-content: start;
	}
`;

const Input = styled.input`
	font-size: 2.5rem;         /* 40px */
	text-transform: uppercase;
	border: none;
	border-bottom: 2px solid ${ theme.gray1 };
	outline: none;

	@media(max-width: 60rem) {  /* Media query at 950px. */
		font-size: 2.2rem;      /* 24px.                 */
	}
`;

const InputBig = styled( Input )`
	font-size: 4.37rem;  /* 70px. */
	font-weight: bold;
`;

const InputContainer = styled.div`
    margin-top: 1.25rem;    /* 20px. */
    margin-bottom: 2.5rem;  /* 40px. */
`;

const SvgRegister = styled( IconRegister )`
    width: 100%;
	max-height: 6.25rem;    /* 100px. */
`;

const SvgLogin = styled( IconLogin )`
    width: 100%;
	max-height: 12.5rem;    /* 200px. */
`;

export { Form, Input, InputBig, InputContainer, SvgRegister, SvgLogin };
