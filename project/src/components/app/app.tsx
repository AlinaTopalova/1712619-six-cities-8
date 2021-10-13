import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { AppRoute } from 'const';
import { Offer } from 'types/offers';
import { Review } from 'types/reviews';
import MainPage from 'components/main-page/main-page';
import LoginPage from 'components/login-page/login-page';
import FavoritesPage from 'components/favorites-page/favorites-page';
import OfferPage from 'components/offer-page/offer-page';
import NotFoundPage from 'components/not-found-page/not-found-page';
import PrivateRoute from 'components/private-route/private-route';

type AppProps = {
  offersData: Offer[],
  reviewsData: Review[],
}

export default function App(props: AppProps): JSX.Element {
  const { offersData, reviewsData } = props;

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoute.Main}>
          <MainPage offersData={offersData} />
        </Route>
        <Route exact path={AppRoute.SignIn}>
          <LoginPage />
        </Route>
        <PrivateRoute exact path={AppRoute.Favorites}>
          <FavoritesPage offersData={offersData} />
        </PrivateRoute>
        <Route exact path={`${AppRoute.Offer}/:offerId`}>
          <OfferPage offersData={offersData} reviewsData={reviewsData}/>
        </Route>
        <Route>
          <NotFoundPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}


