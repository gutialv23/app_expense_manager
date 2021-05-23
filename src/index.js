import React from 'react';
import ReactDOM from 'react-dom';
import { Helmet } from 'react-helmet';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// Styles.
import './index.css';
import favicon from './images/favicon.png';

// Elements.
import MainContainer from './elements/MainContainer';
import Background from './elements/Background';

// Components.
import App from './App';
import Login from './components/Login';
import Register from './components/Register';
import ExpenseList from './components/ExpenseList';

// Fonts.
import WebFont from 'webfontloader';

WebFont.load( { google: { families: ['Work Sans:400,500,700', 'sans-serif'] } } );

const Index = () => {
  return (
    <>
      <Helmet>
        <link rel="shortcut icon" href={ favicon } type="image/x-icon" />
      </Helmet>

      <BrowserRouter>
        <MainContainer>
          <Switch>
            <Route path="/login"        component={ Login       } />
            <Route path="/register"     component={ Register    } />
            <Route path="/expense-list" component={ ExpenseList } />
            <Route path="/"             component={ App         } />
          </Switch>
        </MainContainer>
      </BrowserRouter>

      <Background />
    </>
  );
}

ReactDOM.render( <Index />, document.getElementById( 'root' ) );
