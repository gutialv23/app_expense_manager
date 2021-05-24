import React from 'react';
import { Helmet } from 'react-helmet';

// Elements.
import { Header, HeaderTitle } from '../elements/Header';
import { BackButton } from '../elements/Buttons';

const Login = () =>
{
    return (
        <>
            <Helmet>
                <title>User Login</title>
            </Helmet>

            <Header>
                <BackButton />
                <HeaderTitle>User Login</HeaderTitle>
            </Header>
        </>
    );
}
 
export default Login;
