import React from 'react';
import ReactDOM from 'react-dom';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { ThunkAppDispatch } from 'types/action';
import { checkAuthAction, fetchOffersAction } from 'store/api-action';
import { logOut } from 'store/action';
import { rootReducer } from 'store/root-reducer';
import { createAPI } from 'services/api';
import App from 'app/app';

const api = createAPI(() =>
  store.dispatch(logOut()),
);

export const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(thunk.withExtraArgument(api)),
  ),
);

(store.dispatch as ThunkAppDispatch)(checkAuthAction());
(store.dispatch as ThunkAppDispatch)(fetchOffersAction());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
