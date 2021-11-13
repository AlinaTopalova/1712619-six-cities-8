import { Router } from 'react-router-dom';
import { render } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import Footer from './footer';

const history = createMemoryHistory();

describe('Component: Footer', () => {

  it('should render with altText "6 cities logo"', () => {

    const { getByAltText} = render(
      <Router history={history}>
        <Footer />
      </Router>,
    );

    const altText = getByAltText(/6 cities logo/i);
    expect(altText).toBeInTheDocument();
  });
});
