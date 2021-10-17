import React from 'react';
import ReactDOM from 'react-dom';
import App from 'app/app';
import { offersData } from 'mocks/offers';
import { reviewsData } from 'mocks/reviews';

ReactDOM.render(
  <React.StrictMode>
    <App offersData={offersData} reviewsData={reviewsData} />
  </React.StrictMode>,
  document.getElementById('root'),
);
