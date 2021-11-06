import React from 'react';
import ReactDOM from 'react-dom';
import {ToastContainer} from 'react-toastify';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { ThunkAppDispatch } from 'types/action';
import { AppRoute } from 'const';
import { checkAuthAction, fetchOffersAction } from 'store/api-action';
import { redirectToRoute } from 'store/app-store/actions';
import { logOut } from 'store/auth-store/actions';
import { rootReducer } from 'store/root-reducer';
import { redirect } from 'store/middlewares/redirect';
import { createAPI } from 'services/api';
import App from 'app/app';


const ERROR_MESSAGE = 'Ooops, no response from server!';

const api = createAPI({
  onAuthError: () => {
    store.dispatch(logOut());
    store.dispatch(redirectToRoute(AppRoute.SignIn));
  },
  onServerError: () => toast.error(ERROR_MESSAGE),
});

export const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(thunk.withExtraArgument(api)),
    applyMiddleware(redirect),
  ),
);

(store.dispatch as ThunkAppDispatch)(checkAuthAction());
(store.dispatch as ThunkAppDispatch)(fetchOffersAction());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ToastContainer />
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
