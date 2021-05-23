import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Button = styled( Link )`
	background: ${(props) => props.primary ? '#5B69E2' : '#000'};  /* Primary buttons: blue. -- Secondary buttons: black. */
	width: 'auto';
	margin-left: 1.25rem;                  /* 20px. */
	border: none;
	border-radius: 0.625rem;               /* 10px. */
	color: #fff;
	font-family: 'Work Sans', sans-serif;
	height: 3.75rem;                       /* 60px.      */
	padding: 1.25rem 1.87rem;              /* 20px 30px. */
	font-size: 1.25rem;                    /* 20px.      */
	font-weight: 500;
	cursor: pointer;
	text-decoration: none;
	display: inline-flex;
	justify-content: space-between;        /* Buttons with icon need a space between. */
	align-items: center;
	outline: none;

    /* Button icon style. */
	svg {
		height: ${(props) => props.big ? '100%' : '0.75rem;'};  /* 12px. */
		fill: white;
	}
`;

export default Button;