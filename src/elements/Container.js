import styled from 'styled-components';

const Container = styled.div`
    background: #fff;                                /* White. */
    width: 90%;
    height: 90vh;
    max-width: 70rem;                                /* 1110px.             */
    max-height: 50rem;                               /* 800px.              */
    overflow-y: auto;                                /* Allow inner scroll. */
    box-shadow: 0px 1.25rem 2.5rem rgba(0,0,0,.05);
    border-radius: 0.625rem;                         /* 10px */
    margin: auto;
    display: flex;
    flex-direction: column;                          /* Single column.                */
    justify-content: space-between;                  /* Accommodating vertical space. */
    position: relative;
    z-index: 100;

    @media(max-width: 60rem) {                       /* Media query at 950px */
        height: 95vh;
        max-height: none;
    }
`;
 
export default Container;