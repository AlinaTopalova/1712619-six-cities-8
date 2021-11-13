
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { render, screen } from '@testing-library/react';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { createMemoryHistory } from 'history';
import { createAPI } from 'services/api';
import { storeAuth, storeNoAuth } from 'test-utils/mocks';
import { AppRoute } from 'const';
import App from './app';

const onAuthError = jest.fn();
const onServerError = jest.fn();
const api = createAPI({onAuthError, onServerError});
const history = createMemoryHistory();
const middlewares = [thunk.withExtraArgument(api)];
const mockStore = configureMockStore(middlewares);

describe('Application Routing', () => {
  it('should render "Main-Page" when user navigate to "/"', () => {
    history.push(AppRoute.Main);

    render(
      <Provider store={mockStore(storeAuth)}>
        <Router history={history}>
          <App />
        </Router>
      </Provider>);

    expect(screen.getByText(/Cities/i)).toBeInTheDocument();
  });

  it('should render "Login-Page" when user navigate to "/login"', () => {
    history.push(AppRoute.SignIn);

    render(
      <Provider store={mockStore(storeNoAuth)}>
        <Router history={history}>
          <App />
        </Router>
      </Provider>,
    );

    expect(screen.getByTestId('login-main')).toBeInTheDocument();
  });

  it('should render "Favorites-Page" when user navigate to "/favorites"', () => {
    history.push(AppRoute.Favorites);

    render(
      <Provider store={mockStore(storeAuth)}>
        <Router history={history}>
          <App />
        </Router>
      </Provider>,
    );

    expect(screen.getByTestId('favorites-main')).toBeInTheDocument();
  });

  it('should render "Offer-Page" when user navigate to "/offer/:id"', () => {
    history.push(`${AppRoute.Offer}/1`);

    render(
      <Provider store={mockStore(storeAuth)}>
        <Router history={history}>
          <App />
        </Router>
      </Provider>,
    );

    expect(screen.getByText(/Reviews/i)).toBeInTheDocument();
    expect(screen.getByText(/Bedrooms/i)).toBeInTheDocument();
    expect(screen.getByText(/host/i)).toBeInTheDocument();
    expect(screen.getByText(/Other places in the neighbourhood/i)).toBeInTheDocument();
  });

  it('should render "Not-Found-Page" when user navigate to non-existent route', () => {
    history.push('/non-existent-route');

    render(
      <Provider store={mockStore(storeNoAuth)}>
        <Router history={history}>
          <App />
        </Router>
      </Provider>,
    );

    expect(screen.getByText('We are sorry, Page not found!')).toBeInTheDocument();
  });
});


