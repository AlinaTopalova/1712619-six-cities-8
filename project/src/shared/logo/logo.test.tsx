import {Router, Switch, Route} from 'react-router-dom';
import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { createMemoryHistory } from 'history';
import Logo from './logo';

const history = createMemoryHistory();

describe('Component: Logo', () => {

  it('should render correctly', () => {
    render(
      <Router history={history}>
        <Logo
          width="81"
          height="41"
          className={'header__logo'}
        />
      </Router>);

    expect(screen.getByAltText(/6 cities logo/i)).toBeInTheDocument();
    expect(screen.getByRole('link')).toBeInTheDocument();
  });

  it('should redirect to root url when user clicked to link', () => {
    history.push('/fake');
    render(
      <Router history={history}>
        <Switch>
          <Route path="/" exact>
            <h1>This is main page</h1>
          </Route>
          <Route>
            <Logo
              width="81"
              height="41"
              className={'header__logo'}
            />
          </Route>
        </Switch>
      </Router>);

    expect(screen.queryByText(/This is main page/i)).not.toBeInTheDocument();
    userEvent.click(screen.getByRole('link'));
    expect(screen.queryByText(/This is main page/i)).toBeInTheDocument();
  });
});
