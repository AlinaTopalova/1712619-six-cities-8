import { Router } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Cities } from 'const';
import NoOffers from './no-offers';

const history = createMemoryHistory();

describe('Component: No-Offers', () => {

  it('should render correctly', () => {

    render(
      <Router history={history}>
        <NoOffers currentCity={Cities.Paris}/>
      </Router>);

    expect(screen.getByText(/We could not find any property available at the moment in Paris/i)).toBeInTheDocument();
  });
});
