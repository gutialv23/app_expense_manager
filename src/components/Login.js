import React from 'react';
import { Helmet } from 'react-helmet';

// Elements.
import { Header, HeaderContainer, HeaderTitle } from '../elements/Header';

const Login = () =>
{
    return (
        <>
            <Helmet>
                <title>User Login</title>
            </Helmet>

            <Header>
                <HeaderContainer>
                    <HeaderTitle>User Login</HeaderTitle>
                </HeaderContainer>
            </Header>
        </>
    );
}
 
export default Login;
