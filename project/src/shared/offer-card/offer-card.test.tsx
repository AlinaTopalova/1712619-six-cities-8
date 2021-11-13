import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { fakeOffer, storeAuth } from 'test-utils/mocks';

import OfferCard from './offer-card';

describe('Component: Card', () => {

  it('should render with altText "Place" ant text "night" in OfferCard.Main', () => {
    const mockStore = configureMockStore();
    const history = createMemoryHistory();

    render(
      <Provider store={mockStore(storeAuth)}>
        <Router history={history}>
          <OfferCard.Main offerData={fakeOffer} />
        </Router>
      </Provider>,
    );

    expect(screen.getByAltText(/Place/i)).toBeInTheDocument();
    expect(screen.getByText(/night/i)).toBeInTheDocument();
  });

  it('should render with altText "Place" ant text "night" in OfferCard.Favorite', () => {
    const mockStore = configureMockStore();
    const history = createMemoryHistory();

    render(
      <Provider store={mockStore(storeAuth)}>
        <Router history={history}>
          <OfferCard.Favorite offerData={fakeOffer} />
        </Router>
      </Provider>,
    );

    expect(screen.getByAltText(/Place/i)).toBeInTheDocument();
    expect(screen.getByText(/night/i)).toBeInTheDocument();
  });

  it('should render with altText "Place" ant text "night" in OfferCard.Offer', () => {
    const mockStore = configureMockStore();
    const history = createMemoryHistory();

    render(
      <Provider store={mockStore(storeAuth)}>
        <Router history={history}>
          <OfferCard.Offer offerData={fakeOffer} />
        </Router>
      </Provider>,
    );

    expect(screen.getByAltText(/Place/i)).toBeInTheDocument();
    expect(screen.getByText(/night/i)).toBeInTheDocument();
  });
});
