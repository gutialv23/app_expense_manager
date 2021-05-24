import React from 'react';
import { Helmet } from 'react-helmet';

// Elements.
import { Header, HeaderTitle } from '../elements/Header';
import { Button, ButtonContainer } from '../elements/Buttons';
import { Form, Input, InputContainer, SvgRegister } from '../elements/FormInputs';

const Register = () =>
{
    return (
        <>
            <Helmet>
                <title>Create account</title>
            </Helmet>

            <Header>
                <HeaderTitle>Create account</HeaderTitle>
            </Header>

            <Form>
                <SvgRegister />

                <InputContainer>
                    <Input type="email"    name="email"     placeholder="Email"          ></Input>
                    <Input type="password" name="password"  placeholder="Password"       ></Input>
                    <Input type="password" name="password2" placeholder="Repeat password"></Input>
                </InputContainer>

                <ButtonContainer center >
                    <Button as="button" type="submit" primary >Create account</Button>
                </ButtonContainer>
            </Form>
        </>
    );
}
 
export default Register;
