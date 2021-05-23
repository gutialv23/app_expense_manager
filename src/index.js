import React from 'react';
import ReactDOM from 'react-dom';
import WebFont from 'webfontloader';

// Components.
import App from './App';

// Styles.
import './index.css';

// Font (Work Sans).
WebFont.load( { google: { families: ['Work Sans:400,500,700', 'sans-serif'] } } );

const Index = () => {
  return (
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}

ReactDOM.render( <Index />, document.getElementById( 'root' ) );
