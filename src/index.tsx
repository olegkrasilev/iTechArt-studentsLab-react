import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';

import Error from 'src/pages/error';
import { store } from 'src/redux/store';
import { App } from 'src/App';
import { GlobalStyles } from 'src/styles/global';

ReactDOM.render(
  <React.StrictMode>
    <ErrorBoundary FallbackComponent={Error}>
      <Provider store={store}>
        <BrowserRouter>
          <GlobalStyles />
          <App />
        </BrowserRouter>
      </Provider>
    </ErrorBoundary>
  </React.StrictMode>,
  document.querySelector('#root'),
);
