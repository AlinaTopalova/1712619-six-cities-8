import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { storeAuth, storeNoAuth } from 'test-utils/mocks';
import Header from './header';

const history = createMemoryHistory();

const mockStore = configureMockStore();

describe('Component Header', () => {

  it('should render altText "6 cities" and "Sign Out" for AuthStatus.Auth', () => {

    render(
      <Provider store={mockStore(storeAuth)}>
        <Router history={history}>
          <Header />
        </Router>,
      </Provider>,
    );

    expect(screen.getByAltText(/6 cities logo/i)).toBeInTheDocument();
    expect(screen.getByText(/Sign Out/i)).toBeInTheDocument();
  });

  it('should render altText "6 cities" and "Sign In" for AuthStatus.NoAuth', () => {

    render(
      <Provider store={mockStore(storeNoAuth)}>
        <Router history={history}>
          <Header />
        </Router>,
      </Provider>,
    );

    expect(screen.getByText(/Sign in/i)).toBeInTheDocument();
    expect(screen.getByAltText(/6 cities logo/i)).toBeInTheDocument();
  });
});
