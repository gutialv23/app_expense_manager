import React from 'react';
import { Helmet } from 'react-helmet';

// Elements.
import { Header, HeaderContainer, HeaderTitle } from './elements/Header';
import { Button, ButtonContainer } from './elements/Buttons';

const App = () => {
  return (
    <>
      <Helmet>
        <title>Add Expense</title>
      </Helmet>

      <Header>
        <HeaderContainer>
          <HeaderTitle>Add Expense</HeaderTitle>
          <ButtonContainer>
            <Button to="/expense-list">Expense List</Button>
            <Button to="/login"       >Login       </Button>
            <Button to="/register"    >Register    </Button>
          </ButtonContainer>
        </HeaderContainer>
      </Header>
    </>
  );
}
 
export default App;
