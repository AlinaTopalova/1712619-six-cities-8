import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { storeAuth, storeNoAuth } from 'test-utils/mocks';
import OfferPage from './offer-page';

const MAX_RATING = 5;

const history = createMemoryHistory();

const mockStore = configureMockStore([thunk]);

describe('Component: OfferPage AUTH', () => {

  it('should render correctly AUTH', () => {
    render(
      <Provider store={mockStore(storeAuth)}>
        <Router history={history}>
          <OfferPage />
        </Router>,
      </Provider>,
    );

    expect(screen.getByText(/What's inside/i)).toBeInTheDocument();
    expect(screen.getByText(/Meet the host/i)).toBeInTheDocument();
    expect(screen.getByText(/Reviews/i)).toBeInTheDocument();
    expect(screen.getByText(/Your review/i)).toBeInTheDocument();
    expect(screen.getAllByRole('radio').length).toBe(MAX_RATING);
    expect(screen.getByText(/Other places in the neighbourhood/i)).toBeInTheDocument();
  });
});

describe('Component: OfferPage NOAUTH', () => {

  it('should render correctly NOAUTH', () => {
    render(
      <Provider store={mockStore(storeNoAuth)}>
        <Router history={history}>
          <OfferPage />
        </Router>,
      </Provider>,
    );

    expect(screen.getByText(/What's inside/i)).toBeInTheDocument();
    expect(screen.getByText(/Meet the host/i)).toBeInTheDocument();
    expect(screen.getByText(/Reviews/i)).toBeInTheDocument();
    expect(screen.queryByRole('radio')).not.toBeInTheDocument();
  });
});
