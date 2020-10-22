import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import AppProvider from './hooks';

import Routes from './routes';

import rootReducer from './reducers';

import GlobalStyle from './styles/global';

const store = createStore(rootReducer);

function App(): JSX.Element {
  return (
    <Router>
      <Provider store={store}>
        <AppProvider>
          <Routes />
        </AppProvider>
      </Provider>

      <GlobalStyle />
    </Router>
  );
}

export default App;
