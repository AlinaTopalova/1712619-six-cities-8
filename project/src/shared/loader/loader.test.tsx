import { render, screen } from '@testing-library/react';
import Loader from './loader';

describe('Loader', () => {

  it('render Loading', () => {
    render(<Loader />);

    expect(screen.getByText(/Loading/i)).toBeInTheDocument();
  });
});
