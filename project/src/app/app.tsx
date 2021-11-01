import { useSelector } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { AppRoute } from 'const';
import { getOffers } from 'store/offers-store/selectors';
import PrivateRoute from 'shared/private-route/private-route';
import MainPage from 'pages/main-page/main-page';
import LoginPage from 'pages/login-page/login-page';
import FavoritesPage from 'pages/favorites-page/favorites-page';
import OfferPage from 'pages/offer-page/offer-page';
import NotFoundPage from 'pages/not-found-page/not-found-page';

function App(): JSX.Element {
  const offers = useSelector(getOffers);

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoute.Main}>
          <MainPage />
        </Route>
        <Route exact path={AppRoute.SignIn}>
          <LoginPage />
        </Route>
        <PrivateRoute
          exact
          path={AppRoute.Favorites}
          render={() => <FavoritesPage offersData={offers} />}
        >
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

export default App;


