import App from './App';
import './styles/global.css';
import * as React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';

const rootEl = document.getElementById('root');

render(
  <AppContainer>
    <App />
  </AppContainer>,
  rootEl
);

if (module.hot) {
  module.hot.accept('./App', () => {
    const NextApp = require<any>('./App').default;
    render(
      <AppContainer>
        <NextApp/>
      </AppContainer>,
      rootEl
    );
  });
}
