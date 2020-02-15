import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import store from './store';
import Main from './components/Main';

ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      <Main />
    </HashRouter>
  </Provider>,
  document.getElementById('root')
);
