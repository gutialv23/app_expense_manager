import React from 'react';
import { Helmet } from 'react-helmet';

// Elements.
import { Header, HeaderTitle } from '../elements/Header';
import { Button, ButtonContainer } from '../elements/Buttons';
import { Form, Input, InputContainer, SvgLogin } from '../elements/FormInputs';

const Login = () =>
{
    return (
        <>
            <Helmet>
                <title>User Login</title>
            </Helmet>

            <Header>
                <HeaderTitle>User Login</HeaderTitle>
                <Button to="/register">Register</Button>
            </Header>

            <Form>
                <SvgLogin />

                <InputContainer>
                    <Input type="email"    name="email"     placeholder="Email"    />
                    <Input type="password" name="password"  placeholder="Password" />
                </InputContainer>

                <ButtonContainer center >
                    <Button as="button" type="submit" primary >Login</Button>
                </ButtonContainer>
            </Form>
        </>
    );
}
 
export default Login;
