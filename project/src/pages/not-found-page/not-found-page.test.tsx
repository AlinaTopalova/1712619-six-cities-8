import { Router } from 'react-router';
import { Provider } from 'react-redux';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { storeAuth } from 'test-utils/mocks';
import NotFoundPage from './not-found-page';

const history = createMemoryHistory();

const mockStore = configureMockStore();

describe('Component: NotFoundPage', () => {

  it('should render correctly', () => {

    render(
      <Provider store={mockStore(storeAuth)}>
        <Router history={history}>
          <NotFoundPage />
        </Router>,
      </Provider>,
    );

    expect(screen.getByText(/404/i)).toBeInTheDocument();
  });
});
