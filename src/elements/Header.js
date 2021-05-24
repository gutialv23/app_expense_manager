import styled from 'styled-components';

const Header = styled.div`
	width: 100%;
	padding: 2.5rem;                 /* 40px.                    */
	display: flex;                   /* Flex-box.                */
	justify-content: space-between;  /* Elements right and left. */
	align-items: center;

	@media(max-width: 60rem){        /* Media query at 950px.                 */
		justify-content: start;      /* Remove space if the app is too small. */
	}
`;

/* TODO: review this container. It may be not necessary. */

const HeaderContainer = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;

	@media(max-width: 60rem){            /* Media query at 950px. */
		display: flex;
		flex-direction: column-reverse;  /* Show buttons first if the app is too small. */
		align-items: center;

		& > div {
			display: flex;
			margin-bottom: 1.25rem;      /* 20px.                                 */
			justify-content: end;        /* Locate divs at the end of the column. */
		}
	}
`;

const HeaderTitle = styled.h1`
	font-weight: normal;
	text-transform: uppercase;       /* Uppercase titles. */
	font-size: 2.5rem;               /* 40px.             */
	

	@media(max-width: 60rem){        /* Media query at 950px.                            */
		font-size: 2rem;             /* Reduce font-size if the app is too small (32px). */
	}
`;

export { Header, HeaderContainer, HeaderTitle };
