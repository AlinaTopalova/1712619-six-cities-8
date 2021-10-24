import {connect, ConnectedProps} from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { AppRoute } from 'const';
import { Store } from 'types/store';
import MainPage from 'pages/main-page/main-page';
import LoginPage from 'pages/login-page/login-page';
import FavoritesPage from 'pages/favorites-page/favorites-page';
import OfferPage from 'pages/offer-page/offer-page';
import NotFoundPage from 'pages/not-found-page/not-found-page';
import PrivateRoute from 'shared/private-route/private-route';

const mapStateToProps = ({offers}: Store) => ({
  offers,
});

const connector = connect(mapStateToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;

function App(props: PropsFromRedux): JSX.Element {
  const { offers } = props;

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoute.Main}>
          <MainPage />
        </Route>
        <Route exact path={AppRoute.SignIn}>
          <LoginPage />
        </Route>
        <PrivateRoute exact path={AppRoute.Favorites}>
          <FavoritesPage offersData={offers} />
        </PrivateRoute>
        <Route exact path={`${AppRoute.Offer}/:offerId`}>
          <OfferPage />
        </Route>
        <Route>
          <NotFoundPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export {App};
export default connector(App);


