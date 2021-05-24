import React from 'react';
import { Helmet } from 'react-helmet';

// Elements.
import { Header, HeaderTitle } from '../elements/Header';
import { BackButton } from '../elements/Buttons';

const ExpenseList = () =>
{
    return (
        <>
            <Helmet>
                <title>Expense List</title>
            </Helmet>

            <Header>
                <BackButton />
                <HeaderTitle>Expense List</HeaderTitle>
            </Header>
        </>
    );
}
 
export default ExpenseList;
