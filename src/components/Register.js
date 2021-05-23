import React from 'react';
import { Helmet } from 'react-helmet';

// Elements.
import { Header, HeaderContainer, HeaderTitle } from '../elements/Header';

const Register = () =>
{
    return (
        <>
            <Helmet>
                <title>User Register</title>
            </Helmet>

            <Header>
                <HeaderContainer>
                    <HeaderTitle>User Register</HeaderTitle>
                </HeaderContainer>
            </Header>
        </>
    );
}
 
export default Register;
