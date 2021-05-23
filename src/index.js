import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// Styles.
import './index.css';

// Elements.
import Container from './elements/Container';

// Components.
import App from './App';
import Login from './components/Login';
import Register from './components/Register';
import ExpensesList from './components/ExpensesList';

// Fonts.
import WebFont from 'webfontloader';

WebFont.load( { google: { families: ['Work Sans:400,500,700', 'sans-serif'] } } );

const Index = () => {
  return (
    <BrowserRouter>
      <Container>
        <Switch>
          <Route path="/login"         component={ Login        } />
          <Route path="/register"      component={ Register     } />
          <Route path="/expenses-list" component={ ExpensesList } />
          <Route path="/"              component={ App          } />
        </Switch>
      </Container>
    </BrowserRouter>
  );
}

ReactDOM.render( <Index />, document.getElementById( 'root' ) );
