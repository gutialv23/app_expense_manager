import styled from 'styled-components';
import { Link, useHistory } from 'react-router-dom';
import { ReactComponent as Arrow } from '../images/arrow.svg';

const ButtonContainer = styled.div`
	display: flex;
	justify-content: ${ ( props ) => props.center ? 'center' : 'space-between' };
	align-items: center;
	margin-bottom: ${ ( props ) => props.center ? '2.5rem;' : '0' };
`;

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

const SquareButton = styled.button`
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 0.31rem;     /* 5px. */
	width: 3.12rem;             /* 50px. */
	height: 3.12rem;            /* 50px. */
	line-height: 3.12rem;       /* 50px. */
	text-align: center;
	margin-right: 1.25rem;      /* 20px. */
	border: none;
	background: #000;
	color: #fff;
	cursor: pointer;

	@media(max-width: 60rem) {  /* Media query at 950px.                         */
		width: 2.5rem;          /* Smaller size if the app is smaller than 40px. */
		height: 2.5rem;
		line-height: 2.5rem;
	}
`;

const ArrowIcon = styled( Arrow )`
	width: 50%;
	height: auto;
	fill: #fff;    /* White. */
`;

const BackButton = ( { route = '/' } ) =>
{
	let history = useHistory();

	return (
		<SquareButton>
			<ArrowIcon onClick={ () => { history.push( route ); } } />
		</SquareButton>
	);
}
 
export default BackButton;

export { Button, BackButton, ButtonContainer };
