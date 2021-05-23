import React from 'react';
import { Helmet } from 'react-helmet';

// Elements.
import { Header, HeaderContainer, HeaderTitle } from '../elements/Header';

const ExpenseList = () =>
{
    return (
        <>
            <Helmet>
                <title>Expense List</title>
            </Helmet>

            <Header>
                <HeaderContainer>
                    <HeaderTitle>Expense List</HeaderTitle>
                </HeaderContainer>
            </Header>
        </>
    );
}
 
export default ExpenseList;
