import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { reducer } from 'store/reducer';
import App from 'app/app';
import { offersData } from 'mocks/offers';
import { reviewsData } from 'mocks/reviews';

const store = createStore(reducer, composeWithDevTools());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App offersData={offersData} reviewsData={reviewsData} />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
