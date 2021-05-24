import React from 'react';
import { Helmet } from 'react-helmet';

// Elements.
import { Header, HeaderTitle } from '../elements/Header';
import { BackButton } from '../elements/Buttons';

const Register = () =>
{
    return (
        <>
            <Helmet>
                <title>User Register</title>
            </Helmet>

            <Header>
                <BackButton />
                <HeaderTitle>User Register</HeaderTitle>
            </Header>
        </>
    );
}
 
export default Register;
