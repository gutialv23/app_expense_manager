import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { useHistory } from 'react-router-dom';

// Elements.
import { Header, HeaderTitle } from '../elements/Header';
import { Button, ButtonContainer } from '../elements/Buttons';
import { Form, Input, InputContainer, SvgRegister } from '../elements/FormInputs';

// Firebase.
import { auth } from '../firebase/firebaseConfig';

const Register = () =>
{
    const history = useHistory();

    const [ email    , updateEmail     ] = useState( "" );
    const [ password , updatePassword  ] = useState( "" );
    const [ password2, updatePassword2 ] = useState( "" );

    const handleSubmit = async ( e ) =>
    {
        e.preventDefault();

        const regExp = /[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+/;

        // Check that all the fields have been filled.

        if ( ( email     === "" ) ||
             ( password  === "" ) ||
             ( password2 === "" ) )
        {
            console.log( "ERROR: Please fill all the fields." );
        }

        // Check that the email is valid.

        else if ( !regExp.test( email ) )
        {
            console.log( "ERROR: your email is not valid." );
        }

        // Check that passwords match.

        else if ( password !== password2 )
        {
            console.log( "ERROR: passwords do not match." );
        }
        else
        {
            // Everything is OK -> Create user.

            try
            {
                await auth.createUserWithEmailAndPassword( email, password );

                history.push( "/" );
            }
            catch ( error ) { console.log( error ); }

            // TODO: Unify errors?
        }
    }

    return (
        <>
            <Helmet>
                <title>Create account</title>
            </Helmet>

            <Header>
                <HeaderTitle>Create account</HeaderTitle>
                <Button to="/login">Login</Button>
            </Header>

            <Form onSubmit={ handleSubmit }>
                <SvgRegister />

                <InputContainer>
                    <Input type="email"    name="email"     placeholder="Email"           value={ email     } onChange={ ( e ) => updateEmail    ( e.target.value ) } />
                    <Input type="password" name="password"  placeholder="Password"        value={ password  } onChange={ ( e ) => updatePassword ( e.target.value ) } />
                    <Input type="password" name="password2" placeholder="Repeat password" value={ password2 } onChange={ ( e ) => updatePassword2( e.target.value ) } />
                </InputContainer>

                <ButtonContainer center >
                    <Button as="button" type="submit" primary >Create account</Button>
                </ButtonContainer>
            </Form>
        </>
    );
}
 
export default Register;
