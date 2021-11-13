import { Router } from 'react-router';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { storeAuth } from 'test-utils/mocks';
import SortOffers from './sort-offers';

const history = createMemoryHistory();

const mockStore = configureMockStore([thunk]);

describe('Component: SortOffers', () => {
  it('should render correctly', () => {

    render(
      <Provider store={mockStore(storeAuth)}>
        <Router history={history}>
          <SortOffers />
        </Router>,
      </Provider>,
    );

    expect(screen.getByText(/Top rated first/i)).toBeInTheDocument();
  });
});
