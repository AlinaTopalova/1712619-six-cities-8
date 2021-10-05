import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { AppRoute } from '../../const';
import MainPage from '../main-page/main-page';
import LoginPage from '../login-page/login-page';
import FavoritesPage from '../favorites-page/favorites-page';
import OfferPage from '../offer-page/offer-page';
import NotFoundPage from '../not-found-page/not-found-page';
import PrivateRoute from '../private-route/private-route';

type AppProps = {
  offersAmount: number,
}

const authorizationStatus = false;

export default function App({ offersAmount } : AppProps): JSX.Element {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoute.Main}>
          <MainPage offersAmount = {offersAmount}/>
        </Route>
        <Route exact path={AppRoute.SignIn}>
          <LoginPage/>
        </Route>
        <PrivateRoute exact path={AppRoute.Favorites}
          authorizationStatus={authorizationStatus}
        >
          <FavoritesPage/>
        </PrivateRoute>
        <Route exact path={AppRoute.Offer}>
          <OfferPage/>
        </Route>
        <Route>
          <NotFoundPage/>
        </Route>
      </Switch>
    </BrowserRouter>

  );
}


